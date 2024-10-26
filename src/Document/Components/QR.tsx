import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { FC } from "react";
import { ModeColor, TModes } from "./mixes";
import { Divider } from "./Divider";
import QRCode from "qrcode"

interface QRProps {
    mode: TModes
    documentUrl: string
}


export const QR: FC<QRProps> = ({ mode, documentUrl }) => {
    const code = QRCode.toDataURL(documentUrl, {
        errorCorrectionLevel: 'L',
        margin: 0,
        scale: 4,
        color: {
            dark: ModeColor[mode],
            light: "#ffffff"
        }
    })
    return <Image style={{ width: 30, height: 30 }} src={code} />
}

const styles = StyleSheet.create({
    qr: {
        height: 30,
        width: 30
    }
})