import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import { CmrNo, cmrNoSchema } from "../types";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { FontSize, Spacing, TModes } from "../Components/mixes";
import { IntlText } from "../Components/IntlText";
import { ValueText } from "../Components/ValueText";

interface CMRNoProps {
    cmrNo: CmrNo,
    language: Languages | Languages[]
    mode: TModes
}

export const CMRNo: React.FC<CMRNoProps> = ({ cmrNo: _cmrNo, language, mode }) => {
    const cmrNo = typeCheck(cmrNoSchema, _cmrNo)

    return (
        <Box title="cmrNo.title" language={language} mode={mode}>
            <View style={styles.valueWrapper}>
                <IntlText text="CMR No:" direction="row" mode={mode} style={styles.value} />
                <ValueText value={cmrNo} style={styles.value} />
            </View>
            <IntlText id="cmrNo.description" language={language} direction="row" mode={mode}
                style={styles.description} wrapperStyle={styles.descriptionWrapper} breadCrumb={false} />
        </Box>
    )
}

const styles = StyleSheet.create({
    descriptionWrapper: {
        gap: Spacing.medium
    },
    description: {
        width: "33%",
    },
    valueWrapper: {
        marginVertical: Spacing.small,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: Spacing.small
    },
    value: {
        fontSize: FontSize.large * 2,
        fontWeight: "bold"
    }
})