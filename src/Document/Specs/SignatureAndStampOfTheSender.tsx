import React, {FC} from 'react';
import {Languages} from '../languages';
import {TModes} from '../Components/mixes';
import {
  signatureAndStampOfTheSenderSchema,
  SignatureAndStampOfTheSenderType,
} from '../types';
import {Box} from '../Components/Box';
import {Image, StyleSheet} from '@react-pdf/renderer';
import {typeCheck} from '../utils';
import {IntlText} from '../Components/IntlText';

interface SignatureAndStampOfTheSenderProps {
  data: SignatureAndStampOfTheSenderType;
  language: Languages | Languages[];
  mode: TModes;
}

export const SignatureAndStampOfTheSender: FC<
  SignatureAndStampOfTheSenderProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(signatureAndStampOfTheSenderSchema, _data);
  const {signature} = data;
  return (
    <Box
      order={22}
      language={language}
      mode={mode}
      wrapperStyle={{height: 100}}
      innerStyle={styles.main}
    >
      {signature && <Image src={signature} style={{width: 55, height: 55}} />}
      <IntlText
        id="signatureAndStampOfTheSender.title"
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
