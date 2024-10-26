import { StyleSheet, View } from "@react-pdf/renderer";
import React, { FC } from "react";
import { ValueText } from "./ValueText";
import { CustomerCarrierNode, customerCarrierNodeSchema } from "../types";
import { Spacing, TModes } from "./mixes";
import { IntlText } from "./IntlText";
import { Languages } from "../languages";
import { typeCheck } from "../utils";

interface In1Props {
    data: CustomerCarrierNode
    language: Languages | Languages[]
    mode: TModes
}


export const In1: FC<In1Props> = ({ data: _data, mode, language }) => {
    const data = typeCheck(customerCarrierNodeSchema, _data);
    const { client: { name, address, postCode, city, country, vat, eori, telephone }, plate: { plate }, plate2: { plate: plate2 } } = data
    return (
        <View style={styles.main}>
            <ValueText value={name} />
            <ValueText value={address} />
            {postCode.trim().length > 0 || city.trim().length > 0 || country.trim().length > 0 ?
                <ValueText value={[postCode, city, country].filter(e => e.trim().length > 0).join(", ")} />
                : <ValueText value=" " />}
            <View style={styles.footerWrap}>
                <View style={styles.plateWrap}>
                    {(plate || plate2) && <IntlText id="in1.plates" language={language} direction="col" mode={mode} />}
                    <View style={styles.plateValueWrap}>
                        {plate && <ValueText value={plate} />}
                        {plate2 && <ValueText value={plate2} />}
                    </View>
                </View>
                <View style={styles.commonWrap}>
                    <View style={styles.valueWrapper}>
                        <IntlText id="in1.vat" language={language} direction="row" mode={mode} />
                        <ValueText value={vat} />
                    </View>
                    <View style={styles.valueWrapper}>
                        <IntlText id="in1.eori" language={language} direction="row" mode={mode} />
                        <ValueText value={eori} />
                    </View>
                    <View style={styles.valueWrapper}>
                        <IntlText id="in1.phone" language={language} direction="row" mode={mode} />
                        <ValueText value={telephone} />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        gap: Spacing.small
    },
    footerWrap: {
        display: "flex",
        flexDirection: "row",
        gap: Spacing.small,
        marginTop: Spacing.medium
    },
    plateWrap: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        gap: Spacing.small
    },
    plateValueWrap: {
        display: "flex",
        flexDirection: "column",
        gap: Spacing.small
    },
    commonWrap: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: Spacing.small
    },
    valueWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: Spacing.medium
    }
})