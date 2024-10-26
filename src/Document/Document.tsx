import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import React, { FC } from "react";
import { Footer } from "./Components/Footer";
import { ModeColor, Modes, Spacing, TModes } from "./Components/mixes";
import { Head } from "./Components/Head";
import { Languages } from "./languages";

interface PDFDocumentProps {
    children: (props: { mode: TModes, language: Languages | Languages[] }) => React.ReactNode
    meta?: React.ComponentProps<typeof Document>
    documentId: string
    time: number
    documentUrl: string
    language: Languages | Languages[]
}


export const PDFDocument: FC<PDFDocumentProps> = ({ children, meta, documentId, time, documentUrl, language }) => {

    return (
        <Document {...meta}>
            {[Modes.sender, Modes.consignee, Modes.carrier, Modes.legal].map((mode, index) => (
                <Page key={index} size="A4">
                    <View style={styles.main}>
                        <Head mode={mode} language={language} documentUrl={documentUrl} />
                        <View style={{ ...styles.content, borderColor: ModeColor[mode] }}>
                            {children({ mode, language })}
                        </View>
                        <View style={{ borderWidth: 1, borderColor: ModeColor[mode] }}>
                            <Footer documentId={documentId} documentUrl={documentUrl} time={time} mode={mode} />
                        </View>
                    </View>
                </Page>
            ))}
        </Document>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        paddingTop: Spacing.large,
        paddingBottom: Spacing.large,
        paddingHorizontal: Spacing.large * 3,
        gap: Spacing.medium,
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
    },
})