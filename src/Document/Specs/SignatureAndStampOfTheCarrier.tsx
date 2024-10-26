import React, {FC} from 'react';
import {Languages} from '../languages';
import {TModes} from '../Components/mixes';
import {
  signatureAndStampOfTheCarrierSchema,
  SignatureAndStampOfTheCarrierType,
} from '../types';
import {Box} from '../Components/Box';
import {Image, StyleSheet} from '@react-pdf/renderer';
import {typeCheck} from '../utils';
import {IntlText} from '../Components/IntlText';

interface SignatureAndStampOfTheCarrierProps {
  data: SignatureAndStampOfTheCarrierType;
  language: Languages | Languages[];
  mode: TModes;
}

export const SignatureAndStampOfTheCarrier: FC<
  SignatureAndStampOfTheCarrierProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(signatureAndStampOfTheCarrierSchema, _data);
  const {signature} = data;
  return (
    <Box
      order={23}
      language={language}
      mode={mode}
      wrapperStyle={{height: 100}}
      innerStyle={styles.main}
    >
      <Image src={signature} style={{width: 55, height: 55}} />
      <IntlText
        id="signatureAndStampOfTheCarrier.title"
        language={language}
        direction="col"
        mode={mode}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
