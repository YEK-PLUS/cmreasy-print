import React, {FC} from 'react';
import {establishedInOnSchema, EstablishedInOnType} from '../types';
import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {FontSize, ModeColor, Spacing, TModes} from '../Components/mixes';
import {Languages} from '../languages';
import {IntlText} from '../Components/IntlText';
import {ValueText} from '../Components/ValueText';
import {typeCheck} from '../utils';
import moment from 'moment';

interface EstablishedInOnProps {
  data: EstablishedInOnType;
  language: Languages | Languages[];
  mode: TModes;
}

export const EstablishedInOn: FC<EstablishedInOnProps> = ({
  data: _data,
  language,
  mode,
}) => {
  const data = typeCheck(establishedInOnSchema, _data);
  const {city, date} = data;
  const order = 21;
  const title = 'establishedInOn.title';
  const on = 'establishedInOn.on';
  return (
    <View style={styles.main}>
      <View style={styles.box}>
        <View style={styles.wrapper}>
          <Text style={{...styles.order, color: ModeColor[mode]}}>{order}</Text>
          <IntlText
            id={title}
            language={language}
            direction="col"
            mode={mode}
          />
        </View>
        <View style={styles.content}>
          <ValueText value={city} />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.wrapper}>
          <IntlText id={on} language={language} direction="col" mode={mode} />
        </View>
        <View style={styles.content}>
          <ValueText value={moment(date).format('DD-MM-YYYY')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
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
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingVertical: Spacing.small,
  },
});
