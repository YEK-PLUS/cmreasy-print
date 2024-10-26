import React from "react";
import { CustomerCarrierNode, customerCarrierNodeSchema } from "../types";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { TModes } from "../Components/mixes";
import { In1 } from "../Components/In1";

interface PlaceOfDeliveryProps {
    data: CustomerCarrierNode,
    language: Languages | Languages[]
    mode: TModes
}

export const PlaceOfDelivery: React.FC<PlaceOfDeliveryProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(customerCarrierNodeSchema, _data)
    return (
        <Box title="placeOfDelivery.title" language={language} order={3} mode={mode}>
            <In1 data={data} language={language} mode={mode} />
        </Box>
    )
}
