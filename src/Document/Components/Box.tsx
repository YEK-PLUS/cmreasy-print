import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer';
import {Languages} from '../languages';
import {IntlText} from './IntlText';
import {keys} from './intl';
import {FontSize, ModeColor, Spacing, TModes} from './mixes';
import {Style} from '@react-pdf/types';

interface BoxProps {
  children: React.ReactNode;
  order?: number;
  title?: keys;
  language: Languages | Languages[];
  mode: TModes;
  wrapperStyle?: Style;
  innerStyle?: Style;
}

export const Box: React.FC<BoxProps> = ({
  children,
  order,
  title,
  language,
  mode,
  wrapperStyle,
  innerStyle,
}) => {
  return (
    <View style={{...styles.box, ...wrapperStyle}}>
      <View style={styles.wrapper}>
        {order && (
          <Text style={{...styles.order, color: ModeColor[mode]}}>{order}</Text>
        )}
        {title && (
          <IntlText
            id={title}
            language={language}
            direction="col"
            mode={mode}
          />
        )}
      </View>
      <View style={{...styles.content, ...innerStyle}}>{children}</View>
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
  },
  content: {
    paddingVertical: Spacing.small,
  },
});
