import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { FC } from "react";
import { FontSize, ModeColor, Spacing, TModes } from "./mixes";

interface LogoProps {
    mode: TModes
}

export const Logo: FC<LogoProps> = ({ mode }) => {
    return <Text style={styles.text}>
        CMR
        <Text style={{ color: ModeColor[mode] }}>
            EASY
        </Text>
    </Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: FontSize.title,
        fontWeight: "bold",
        textAlign: "center"
    }
})