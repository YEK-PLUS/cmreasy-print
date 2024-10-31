import React, {FC} from 'react';
import {Languages} from '../languages';
import {TModes} from '../Components/mixes';
import {
  signatureAndStampOfTheConsigneeSchema,
  SignatureAndStampOfTheConsigneeType,
} from '../types';
import {Box} from '../Components/Box';
import {Image, StyleSheet} from '@react-pdf/renderer';
import {typeCheck} from '../utils';
import {IntlText} from '../Components/IntlText';

interface SignatureAndStampOfTheConsigneeProps {
  data: SignatureAndStampOfTheConsigneeType;
  language: Languages | Languages[];
  mode: TModes;
}

export const SignatureAndStampOfTheConsignee: FC<
  SignatureAndStampOfTheConsigneeProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(signatureAndStampOfTheConsigneeSchema, _data);
  const {signature} = data;
  return (
    <Box
      order={24}
      title="signatureAndStampOfTheConsignee.title"
      language={language}
      mode={mode}
      wrapperStyle={{height: 100}}
      innerStyle={styles.main}
    >
      {signature && <Image src={signature} style={{width: 55, height: 55}} />}
      <IntlText
        id="signatureAndStampOfTheConsignee.footer"
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
