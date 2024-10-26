import React from "react";
import { CustomerCarrierNode, customerCarrierNodeSchema } from "../types";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { TModes } from "../Components/mixes";
import { In1 } from "../Components/In1";

interface ConsigneeProps {
    data: CustomerCarrierNode,
    language: Languages | Languages[]
    mode: TModes
}

export const Consignee: React.FC<ConsigneeProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(customerCarrierNodeSchema, _data)
    return (
        <Box title="consignee.title" language={language} order={2} mode={mode}>
            <In1 data={data} language={language} mode={mode} />
        </Box>
    )
}
