import {View} from '@react-pdf/renderer';
import React, {FC, Fragment} from 'react';
import {TModes} from './mixes';
import {Style} from '@react-pdf/types';
import {Divider} from './Divider';

interface SlotProps {
  type: 'col' | 'row';
  mode: TModes;
  children: React.ReactNode[];
  wrapperStyle?: Style;
  innerStyle?: Style;
}

export const Slot: FC<SlotProps> = ({
  children,
  type,
  mode,
  wrapperStyle,
  innerStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: type === 'col' ? 'column' : 'row',
        display: 'flex',
        ...wrapperStyle,
      }}
    >
      {children.map((component, index) => (
        <Fragment key={index}>
          {innerStyle ? <View style={innerStyle}>{component}</View> : component}
          {index < children.length - 1 && (
            <Divider
              mode={mode}
              type={type === 'col' ? 'horizontal' : 'vertical'}
            />
          )}
        </Fragment>
      ))}
    </View>
  );
};
