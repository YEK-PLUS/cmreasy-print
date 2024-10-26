import React, {FC} from 'react';
import {sendersInstructionsSchema, SendersInstructionsType} from '../types';
import {Languages} from '../languages';
import {TModes} from '../Components/mixes';
import {typeCheck} from '../utils';
import {Box} from '../Components/Box';
import {StyleSheet, View} from '@react-pdf/renderer';
import {ValueText} from '../Components/ValueText';

interface SenderInstructionsProps {
  data: SendersInstructionsType;
  language: Languages | Languages[];
  mode: TModes;
}

export const SenderInstructions: FC<SenderInstructionsProps> = ({
  data: _data,
  language,
  mode,
}) => {
  const data = typeCheck(sendersInstructionsSchema, _data);
  return (
    <Box
      title="senderInstructions.title"
      language={language}
      mode={mode}
      order={13}
      wrapperStyle={{flex: 1}}
    >
      <View style={styles.main}>
        <ValueText value={data} />
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
