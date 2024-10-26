import React, { FC } from "react"
import { ModeColor, TModes } from "./mixes"
import { View } from "@react-pdf/renderer"

interface DividerProps {
    mode: TModes
    type: "vertical" | "horizontal"
}
export const Divider: FC<DividerProps> = ({ mode, type }) => {
    return <View style={{
        height: type === "horizontal" ? 1 : "100%",
        width: type === "horizontal" ? "100%" : 1,
        backgroundColor: ModeColor[mode]
    }} />
}