import React, { FC } from "react"
import { Spacing, TModes } from "../Components/mixes"
import { Languages } from "../languages"
import { specialAgreementsSchema, SpecialAgreementsType } from "../types"
import { typeCheck } from "../utils"
import { Box } from "../Components/Box"
import { StyleSheet, View } from "@react-pdf/renderer"
import { ValueText } from "../Components/ValueText"

interface SpecialAgreementsProps {
    data: SpecialAgreementsType,
    language: Languages | Languages[]
    mode: TModes
}

export const SpecialAgreements: FC<SpecialAgreementsProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(specialAgreementsSchema, _data)
    const { name, description } = data
    return <Box title="specialAgreements.title" language={language} mode={mode} order={19}>
        <View style={styles.main}>
            <ValueText value={name.toUpperCase()} />
            <ValueText value={description} />
        </View>
    </Box>
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        gap: Spacing.small
    }
})