import {View, Text, StyleSheet} from '@react-pdf/renderer';
import React, {FC} from 'react';
import {FontSize, ModeColor, Spacing, TModes} from './mixes';
import {Logo} from './Logo';
import {IntlText} from './IntlText';
import {Languages} from '../languages';
import {QR} from './QR';

interface HeadProps {
  mode: TModes;
  language: Languages | Languages[];
  documentUrl: string;
}

export const Head: FC<HeadProps> = ({mode, language, documentUrl}) => {
  return (
    <View style={styles.head}>
      <View style={styles.infoView}>
        {mode !== 'legal' && (
          <>
            <Text style={{...styles.order, color: ModeColor[mode]}}>
              {mode === 'sender' ? '1' : mode === 'consignee' ? '2' : '3'}
            </Text>
            <IntlText
              id={`head.info.${mode}`}
              language={language}
              mode={mode}
              style={{
                fontWeight: 'bold',
                fontSize: FontSize.large * 1.2,
              }}
            />
          </>
        )}
      </View>
      <View style={styles.qrView}>
        <QR mode={mode} documentUrl={documentUrl} />
      </View>
      <View style={styles.logoView}>
        <Logo mode={mode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  infoView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: Spacing.small,
  },
  order: {
    marginLeft: -20,
    width: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FontSize.title * 1.3,
  },
  logoView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  qrView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
