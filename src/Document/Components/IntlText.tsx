import React, { ComponentProps, ComponentType, FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { intl, keys } from "./intl";
import { Languages } from "../languages";
import { FontSize, ModeColor, Modes, Spacing, TColors, TModes } from "./mixes";

interface IntlTextProps {
    mode: TModes,
    color?: TColors,
    style?: Style
    wrapperStyle?: Style
    options?: React.ComponentProps<typeof Text>
    breadCrumb?: boolean
    wrap?: boolean
}
interface IDText {
    id: keys
    text?: undefined
    language: Languages | Languages[]
    direction?: "col" | "row"
}

interface TextText {
    id?: undefined
    text: string
    language?: Languages | Languages[]
    direction?: "col" | "row"
}

export const IntlText: FC<IntlTextProps & (IDText | TextText)> = ({
    id,
    text,
    language: _language = Languages.en,
    mode,
    color: _color,
    direction = "col",
    style,
    wrapperStyle,
    options,
    breadCrumb = true,
    wrap = false
}) => {
    const languages = _language instanceof Array ? _language : [_language]
    const color = _color || ModeColor[mode]
    return (
        <View style={{ ...direction === "col" ? styles.col : styles.row, ...wrapperStyle, flexWrap: wrap ? "wrap" : "nowrap" }}>
            {languages.map(l =>
                <Text key={l} {...options} style={{ ...styles.text, color, ...style }}>
                    {id && intl(id, l)}
                    {text && text}
                    {direction === "row" && breadCrumb && l !== languages[languages.length - 1] && " / "}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: FontSize.small,
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row",
    }
})