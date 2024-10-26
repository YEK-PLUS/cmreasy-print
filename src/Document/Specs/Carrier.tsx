import React from "react";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { TModes } from "../Components/mixes";
import { In1 } from "../Components/In1";
import { CustomerCarrierNode, customerCarrierNodeSchema } from "../types";

interface CarrierProps {
    data: CustomerCarrierNode,
    language: Languages | Languages[]
    mode: TModes
}

export const Carrier: React.FC<CarrierProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(customerCarrierNodeSchema, _data)
    return (
        <Box title="carrier.title" language={language} order={16} mode={mode}>
            <In1 data={data} language={language} mode={mode} />
        </Box>
    )
}
