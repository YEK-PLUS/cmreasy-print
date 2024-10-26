import React, { FC } from "react"
import { adrSchema, AdrType, productsSchema, ProductsType } from "../types"
import { Languages } from "../languages"
import { FontSize, ModeColor, Spacing, TModes } from "../Components/mixes"
import { typeCheck } from "../utils"
import { Slot } from "../Components/Slot"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { keys } from "../Components/intl"
import { IntlText } from "../Components/IntlText"
import { ValueText } from "../Components/ValueText"

interface ADRItemProps {
    label?: keys
    text?: string
    value: string
    mode: TModes
    language: Languages | Languages[]
}
const ADRItem: FC<ADRItemProps> = ({ label, text, value, mode, language }) => {
    return <View style={styles.adrItemWrapper}>
        {label && <IntlText id={label} mode={mode} language={language} direction="col" />}
        {text && <IntlText text={text} mode={mode} direction="col" />}
        <ValueText value={value} />
    </View>
}

interface ADRProps {
    data: AdrType
    language: Languages | Languages[]
    mode: TModes
}
const ADR: FC<ADRProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(adrSchema, _data);
    const { adrLetter, adrClass, adrNumber, adr } = data
    return <View style={styles.adrWrapper}>
        <ADRItem label="adr.class" value={adrClass} mode={mode} language={language} />
        <ADRItem label="adr.number" value={adrNumber} mode={mode} language={language} />
        <ADRItem label="adr.letter" value={adrLetter} mode={mode} language={language} />
        <ADRItem text="(ADR*)" value={adr} mode={mode} language={language} />
    </View>
}

interface ProductsFooterProps {
    data: ProductsType
    language: Languages | Languages[]
    mode: TModes
}
const ProductsFooter: FC<ProductsFooterProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(productsSchema, _data);
    const weight = data.reduce((acc, { grossWeightInKg }) => acc + (grossWeightInKg || 0), 0);
    const volume = data.reduce((acc, { volumeInM3 }) => acc + (volumeInM3 || 0), 0);
    return (
        <View style={styles.productsFooterWrapper}>
            <View style={{ flex: 1 }} />
            <ValueText value={weight.toString()} style={{ flex: 1, textAlign: "center" }} />
            <ValueText value={volume.toString()} style={{ flex: 1, textAlign: "center" }} />
        </View>
    )
}

interface ProductsStatisticsProps {
    data: ProductsType
    language: Languages | Languages[]
    mode: TModes
}
const ProductsStatistics: FC<ProductsStatisticsProps> = ({ data: _data, language, mode }) => {
    const data = typeCheck(productsSchema, _data);
    return <Slot type="row" mode={mode} wrapperStyle={{ flex: 1, }} innerStyle={{ flex: 1 }}>
        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>10</Text>
                <IntlText id="products.statisticalNumber" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ statisticalNumber }, index) => <ProductsItemValue center value={statisticalNumber} key={index} />)}
        </View>
        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>11</Text>
                <IntlText id="products.grossWeightInKg" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ grossWeightInKg }, index) => <ProductsItemValue center value={grossWeightInKg?.toString() || ""} key={index} />)}
        </View>
        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>12</Text>
                <IntlText id="products.volumeInM3" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ volumeInM3 }, index) => <ProductsItemValue center value={volumeInM3?.toString() || ""} key={index} />)}
        </View>
    </Slot>
}

interface ProductsItemValueProps {
    value: string
    center?: boolean
}
const ProductsItemValue: FC<ProductsItemValueProps> = ({ value, center = false }) => {
    return <ValueText value={value} style={{ paddingVertical: Spacing.small, textAlign: center ? "center" : "left" }} />
}

interface ProductsMainProps {
    data: ProductsType
    language: Languages | Languages[]
    mode: TModes
}
const ProductsMain: FC<ProductsMainProps> = ({ data, language, mode }) => {
    return <View style={styles.productsMainWrapper}>
        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>6</Text>
                <IntlText id="products.marksAndNos" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ marksAndNos }, index) => <ProductsItemValue value={`${index + 1}. ${marksAndNos}`} key={index} />)}
        </View>

        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>7</Text>
                <IntlText id="products.numberOfPackages" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ numberOfPackages }, index) => <ProductsItemValue value={numberOfPackages} key={index} />)}
        </View>

        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>8</Text>
                <IntlText id="products.methodOfPacking" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ methodOfPacking }, index) => <ProductsItemValue value={methodOfPacking} key={index} />)}
        </View>

        <View style={styles.productsWrapper}>
            <View style={styles.titleWrapper}>
                <Text style={{ ...styles.titleOrder, color: ModeColor[mode] }}>9</Text>
                <IntlText id="products.natureOfTheGoods" direction="col" mode={mode} language={language} />
            </View>
            {data.map(({ natureOfTheGoods }, index) => <ProductsItemValue value={natureOfTheGoods} key={index} />)}
        </View>

    </View>
}

interface ProductsProps {
    data: { products: ProductsType, adr: AdrType }
    language: Languages | Languages[]
    mode: TModes
}
export const Products: FC<ProductsProps> = ({
    data: { products: _products, adr: _adr }, language, mode
}) => {
    const products = typeCheck(productsSchema, _products);
    const adr = typeCheck(adrSchema, _adr);

    return <Slot type="col" mode={mode} wrapperStyle={{ flex: 1 }}>
        <Slot type="row" mode={mode} wrapperStyle={{ flex: 1 }}>
            <View style={{ flex: 6 }}>
                <ProductsMain data={products} language={language} mode={mode} />
            </View>
            <View style={{ flex: 4 }}>
                <ProductsStatistics data={products} language={language} mode={mode} />
            </View>
        </Slot>
        <Slot type="row" mode={mode}>
            <View style={{ flex: 6 }}>
                <ADR data={adr} language={language} mode={mode} />
            </View>
            <View style={{ flex: 4 }}>
                <ProductsFooter data={products} language={language} mode={mode} />
            </View>
        </Slot>
    </Slot>
}


const styles = StyleSheet.create({
    adrWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.large,
    },
    adrItemWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: Spacing.medium,
        flex: 1,
    },
    productsFooterWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.large,
    },
    productsWrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: Spacing.small,
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.medium,
    },
    titleOrder: {
        fontWeight: 'bold',
        fontSize: FontSize.title,
        marginRight: Spacing.medium,
    },
    productsMainWrapper: {
        paddingLeft: Spacing.large,
        display: "flex",
        flexDirection: "row",
        flex: 1,
    }
})