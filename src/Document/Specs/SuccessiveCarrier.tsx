import React from "react";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { TModes } from "../Components/mixes";
import { In1 } from "../Components/In1";
import { CustomerCarrierNode, customerCarrierNodeSchema } from "../types";

interface SuccessiveCarrierProps {
    data: CustomerCarrierNode,
    language: Languages | Languages[]
    mode: TModes
}

export const SuccessiveCarrier: React.FC<SuccessiveCarrierProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(customerCarrierNodeSchema, _data)
    return (
        <Box title="successiveCarrier.title" language={language} order={17} mode={mode}>
            <In1 data={data} language={language} mode={mode} />
        </Box>
    )
}
