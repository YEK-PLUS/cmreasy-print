import React, {FC} from 'react';
import {cashOnDeliverySchema, CashOnDeliveryType} from '../types';
import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {FontSize, ModeColor, Spacing, TModes} from '../Components/mixes';
import {Languages} from '../languages';
import {IntlText} from '../Components/IntlText';
import {ValueText} from '../Components/ValueText';
import {typeCheck} from '../utils';

interface CashOnDeliveryProps {
  data: CashOnDeliveryType;
  language: Languages | Languages[];
  mode: TModes;
}

export const CashOnDelivery: FC<CashOnDeliveryProps> = ({
  data: _data,
  language,
  mode,
}) => {
  const data = typeCheck(cashOnDeliverySchema, _data);
  const order = 15;
  const title = 'cashOnDelivery.title';
  return (
    <View style={styles.box}>
      <View style={styles.wrapper}>
        <Text style={{...styles.order, color: ModeColor[mode]}}>{order}</Text>
        <IntlText id={title} language={language} direction="col" mode={mode} />
      </View>
      <View style={styles.content}>
        <ValueText value={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  order: {
    fontWeight: 'bold',
    fontSize: FontSize.title,
    marginRight: Spacing.medium,
  },
  box: {
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.large,
    gap: Spacing.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingVertical: Spacing.small,
  },
});
