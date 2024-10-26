import React, { FC } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Colors, FontSize, TColors } from "./mixes";
import { Style } from "@react-pdf/types";

interface ValueTextProps {
    value: string
    color?: typeof Colors[TColors]
    style?: Style
    options?: React.ComponentProps<typeof Text>
}


export const ValueText: FC<ValueTextProps> = ({
    value,
    color = Colors.black,
    style,
    options
}) => (
    <Text {...options} style={{ ...styles.text, color, ...style }}>
        {value}
    </Text>
)

const styles = StyleSheet.create({
    text: {
        fontSize: FontSize.large
    }
})