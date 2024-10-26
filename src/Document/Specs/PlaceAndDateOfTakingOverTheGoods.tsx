import React from 'react';
import {StyleSheet, View} from '@react-pdf/renderer';
import {
  PlaceAndDateOfTakingOverTheGoodsType,
  placeAndDateOfTakingOverTheGoodsSchema,
} from '../types';
import {typeCheck} from '../utils';
import {Languages} from '../languages';
import {Box} from '../Components/Box';
import {TModes} from '../Components/mixes';
import {ValueText} from '../Components/ValueText';
import moment from 'moment';

interface PlaceAndDateOfTakingOverTheGoodsProps {
  data: PlaceAndDateOfTakingOverTheGoodsType;
  language: Languages | Languages[];
  mode: TModes;
}

export const PlaceAndDateOfTakingOverTheGoods: React.FC<
  PlaceAndDateOfTakingOverTheGoodsProps
> = ({data: _data, language, mode}) => {
  const data = typeCheck(placeAndDateOfTakingOverTheGoodsSchema, _data);
  const {takeCity, takeCountry, takeDate} = data;

  return (
    <Box
      title="placeAndDateOfTakingOverTheGoods.title"
      language={language}
      mode={mode}
      order={4}
    >
      <View style={styles.main}>
        <ValueText value={`${takeCity}, ${takeCountry}`} />
        <ValueText value={moment(takeDate).format('DD-MM-YYYY')} />
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
