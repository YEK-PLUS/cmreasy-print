import React, {FC} from 'react';
import {
  instructionAsToPaymentForCarriageSchema,
  InstructionAsToPaymentForCarriageType,
} from '../types';
import {Spacing, TModes} from '../Components/mixes';
import {Languages} from '../languages';
import {typeCheck} from '../utils';
import {Box} from '../Components/Box';
import {StyleSheet, View} from '@react-pdf/renderer';
import {ValueText} from '../Components/ValueText';
import {IntlText} from '../Components/IntlText';

interface InstructionAsToPaymentForCarriageProps {
  data: InstructionAsToPaymentForCarriageType;
  language: Languages | Languages[];
  mode: TModes;
}

export const InstructionAsToPaymentForCarriage: FC<
  InstructionAsToPaymentForCarriageProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(instructionAsToPaymentForCarriageSchema, _data);
  const {instructions, carriagePaid, carriageForward} = data;
  return (
    <Box
      title="instructionAsToPaymentForCarriage.title"
      language={language}
      mode={mode}
      order={14}
    >
      <View style={styles.main}>
        <ValueText value={instructions} />
        <View style={styles.valueWrapper}>
          <IntlText
            id="instructionAsToPaymentForCarriage.carriagePaid"
            language={language}
            direction="row"
            mode={mode}
          />
          <ValueText value={carriagePaid} />
        </View>
        <View style={styles.valueWrapper}>
          <IntlText
            id="instructionAsToPaymentForCarriage.carriageForward"
            language={language}
            direction="row"
            mode={mode}
          />
          <ValueText value={carriageForward} />
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: Spacing.small,
  },
  valueWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: Spacing.medium,
  },
});
