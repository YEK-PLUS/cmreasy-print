import React, {FC} from 'react';
import {Box} from '../Components/Box';
import {Languages} from '../languages';
import {TModes} from '../Components/mixes';
import {
  carriersReservationsAndObservationsSchema,
  CarriersReservationsAndObservationsType,
} from '../types';
import {StyleSheet, View} from '@react-pdf/renderer';
import {typeCheck} from '../utils';
import {ValueText} from '../Components/ValueText';

interface CarriersReservationsAndObservationsProps {
  data: CarriersReservationsAndObservationsType;
  language: Languages | Languages[];
  mode: TModes;
}
export const CarriersReservationsAndObservations: FC<
  CarriersReservationsAndObservationsProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(carriersReservationsAndObservationsSchema, _data);
  return (
    <Box
      title="carrierReservationsAndObservations.title"
      language={language}
      mode={mode}
      order={18}
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
