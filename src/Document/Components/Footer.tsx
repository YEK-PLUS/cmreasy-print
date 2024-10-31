import {StyleSheet, View} from '@react-pdf/renderer';
import React, {FC} from 'react';
import moment from 'moment';
import {ValueText} from './ValueText';
import {ModeColor, Spacing, TModes} from './mixes';
interface FooterProps {
  documentId: string;
  documentUrl: string;
  time: number;
  mode: TModes;
}

export const Footer: FC<FooterProps> = ({documentId, time, mode}) => {
  return (
    <View style={styles.main}>
      <View style={{flex: 1}}>
        <ValueText
          color={ModeColor[mode]}
          value={documentId}
          style={{textAlign: 'left'}}
        />
      </View>
      <View style={{flex: 1}}>
        <ValueText
          color={ModeColor[mode]}
          value="Generated Using CMREasy.com"
          style={{textAlign: 'center'}}
        />
      </View>
      <View style={{flex: 1}}>
        <ValueText
          color={ModeColor[mode]}
          value={`File generated date is ${moment(time).format('DD.MM.YYYY HH:mm')}`}
          style={{textAlign: 'right'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.small,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
