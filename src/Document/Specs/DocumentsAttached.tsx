import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import { documentsAttachedSchema, DocumentsAttachedType } from "../types";
import { typeCheck } from '../utils';
import { Languages } from "../languages";
import { Box } from "../Components/Box";
import { Spacing, TModes } from "../Components/mixes";
import { ValueText } from "../Components/ValueText";

interface DocumentsAttachedProps {
    data: DocumentsAttachedType,
    language: Languages | Languages[]
    mode: TModes
}

export const DocumentsAttached: React.FC<DocumentsAttachedProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(documentsAttachedSchema, _data)
    const { documentsAttached1, documentsAttached2, documentsAttached3 } = data

    return (
        <Box title="placeAndDateOfTakingOverTheGoods.title" language={language} mode={mode} order={5}>
            <View style={styles.main}>
                <ValueText value={documentsAttached1} />
                <ValueText value={documentsAttached2} />
                <ValueText value={documentsAttached3} />
            </View>
        </Box>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        gap: Spacing.small
    }
})