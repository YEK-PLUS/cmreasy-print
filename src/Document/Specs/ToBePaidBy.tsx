import React, {FC} from 'react';
import {toBePaidBySchema, ToBePaidByType} from '../types';
import {Languages} from '../languages';
import {FontSize, ModeColor, Spacing, TModes} from '../Components/mixes';
import {StyleSheet, Text, View} from '@react-pdf/renderer';
import {IntlText} from '../Components/IntlText';
import {keys} from '../Components/intl';
import {Slot} from '../Components/Slot';
import {ValueText} from '../Components/ValueText';
import {typeCheck} from '../utils';

interface ToBePaidByProps {
  data: ToBePaidByType;
  language: Languages | Languages[];
  mode: TModes;
}

const MainTitle: FC<{
  title: keys;
  order?: number;
  mode: TModes;
  language: Languages | Languages[];
}> = ({title, order, mode, language}) => {
  return (
    <View style={styles.mainTitleWrapper}>
      {order && (
        <Text style={{...styles.titleOrder, color: ModeColor[mode]}}>
          {order}
        </Text>
      )}
      <IntlText id={title} direction="col" language={language} mode={mode} />
    </View>
  );
};
const Title: FC<{
  title: keys;
  mode: TModes;
  language: Languages | Languages[];
  divider?: boolean;
}> = ({title, mode, language, divider = true}) => {
  if (divider) {
    return (
      <Slot type="row" mode={mode} wrapperStyle={{flex: 1}}>
        <View style={styles.titleWrapper}>
          <IntlText
            id={title}
            direction="col"
            language={language}
            mode={mode}
            style={{flex: 1, textAlign: 'center'}}
          />
        </View>
        <View style={styles.checkBox} />
      </Slot>
    );
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.titleWrapper}>
        <IntlText
          id={title}
          direction="col"
          language={language}
          mode={mode}
          style={{flex: 1, textAlign: 'center'}}
        />
      </View>
    </View>
  );
};

const LeftTitle: FC<{
  titles: keys[];
  mode: TModes;
  language: Languages | Languages[];
}> = ({titles, mode, language}) => {
  return (
    <View style={styles.leftTitleWrapper}>
      {titles.map((title, index) => (
        <IntlText
          id={title}
          direction="row"
          breadCrumb
          wrap
          language={language}
          mode={mode}
          key={index}
        />
      ))}
    </View>
  );
};

const Value: FC<{values: string[] | string[][]; mode: TModes}> = ({
  values,
  mode,
}) => {
  return (
    <View style={styles.valueWrapper}>
      <Slot
        type="col"
        mode={mode}
        wrapperStyle={{flex: 1}}
        innerStyle={{flex: 1}}
      >
        {values.map((value, index) => (
          <Slot type="row" mode={mode} key={index} wrapperStyle={{flex: 1}}>
            <View style={styles.value}>
              <ValueText
                value={Array.isArray(value) ? value[0] : value}
                style={{textAlign: 'center', flex: 1}}
              />
            </View>
            <View style={styles.checkBox}>
              {Array.isArray(value) ? (
                <ValueText
                  value={value[1]}
                  style={{textAlign: 'center', flex: 1}}
                />
              ) : null}
            </View>
          </Slot>
        ))}
      </Slot>
    </View>
  );
};

export const ToBePaidBy: FC<ToBePaidByProps> = ({
  data: _data,
  language,
  mode,
}) => {
  const data = typeCheck(toBePaidBySchema, _data);
  const {
    carriageCharges,
    deductions,
    balance,
    supplementaryCharges,
    miscellaneous,
    cargoInsurance,
    totalToBePaid,
  } = data;
  return (
    <Slot type="col" mode={mode}>
      <Slot type="row" mode={mode}>
        <MainTitle
          title="toBePaidBy.title"
          order={20}
          mode={mode}
          language={language}
        />
        <Title title="toBePaidBy.sender" mode={mode} language={language} />
        <Title
          title="toBePaidBy.currency"
          mode={mode}
          language={language}
          divider={false}
        />
        <Title title="toBePaidBy.consignee" mode={mode} language={language} />
      </Slot>
      <Slot type="row" mode={mode}>
        <LeftTitle
          titles={['toBePaidBy.carriageCharges', 'toBePaidBy.deductions']}
          mode={mode}
          language={language}
        />
        <Value
          values={[carriageCharges.sender, deductions.sender]}
          mode={mode}
        />
        <Value
          values={[
            [carriageCharges.currency, carriageCharges.currency2],
            [deductions.currency, deductions.currency2],
          ]}
          mode={mode}
        />
        <Value
          values={[carriageCharges.consignee, deductions.consignee]}
          mode={mode}
        />
      </Slot>
      <Slot type="row" mode={mode}>
        <LeftTitle
          titles={[
            'toBePaidBy.balance',
            'toBePaidBy.supplementaryCharges',
            'toBePaidBy.miscellaneous',
          ]}
          mode={mode}
          language={language}
        />
        <Value
          values={[
            balance.sender,
            supplementaryCharges.sender,
            miscellaneous.sender,
          ]}
          mode={mode}
        />
        <Value
          values={[
            [balance.currency, balance.currency2],
            [supplementaryCharges.currency, supplementaryCharges.currency2],
            [miscellaneous.currency, miscellaneous.currency2],
          ]}
          mode={mode}
        />
        <Value
          values={[
            balance.consignee,
            supplementaryCharges.consignee,
            miscellaneous.consignee,
          ]}
          mode={mode}
        />
      </Slot>
      <Slot type="row" mode={mode}>
        <LeftTitle
          titles={['toBePaidBy.cargoInsurance']}
          mode={mode}
          language={language}
        />
        <Value values={[cargoInsurance.sender]} mode={mode} />
        <Value
          values={[[cargoInsurance.currency, cargoInsurance.currency2]]}
          mode={mode}
        />
        <Value values={[cargoInsurance.consignee]} mode={mode} />
      </Slot>
      <Slot type="row" mode={mode}>
        <LeftTitle
          titles={['toBePaidBy.totalToBePaid']}
          mode={mode}
          language={language}
        />
        <Value values={[totalToBePaid.sender]} mode={mode} />
        <Value
          values={[[totalToBePaid.currency, totalToBePaid.currency2]]}
          mode={mode}
        />
        <Value values={[totalToBePaid.consignee]} mode={mode} />
      </Slot>
    </Slot>
  );
};

const styles = StyleSheet.create({
  mainTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.large,
    width: '35%',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    flex: 1,
  },
  leftTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    width: '35%',
  },
  titleOrder: {
    fontWeight: 'bold',
    fontSize: FontSize.title,
    marginRight: Spacing.medium,
  },
  valueWrapper: {
    flex: 1,
  },
  value: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  checkBox: {
    width: 15,
  },
});
