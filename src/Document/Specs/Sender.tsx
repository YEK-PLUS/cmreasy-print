import React from 'react';
import {CustomerCarrierNode, customerCarrierNodeSchema} from '../types';
import {typeCheck} from '../utils';
import {Languages} from '../languages';
import {Box} from '../Components/Box';
import {TModes} from '../Components/mixes';
import {In1} from '../Components/In1';

interface SenderProps {
  data: CustomerCarrierNode;
  language: Languages | Languages[];
  mode: TModes;
}

export const Sender: React.FC<SenderProps> = ({
  data: _data,
  language,
  mode,
}) => {
  const data = typeCheck(customerCarrierNodeSchema, _data);
  return (
    <Box title="sender.title" language={language} order={1} mode={mode}>
      <In1 data={data} language={language} mode={mode} />
    </Box>
  );
};
