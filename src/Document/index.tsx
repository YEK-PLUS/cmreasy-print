import React, { FC } from "react"
import { CMRNo } from "./Specs/CMRNo"
import { PDFDocument } from "./Document"
import { Languages } from "./languages"
import { Sender } from "./Specs/Sender"
import { Consignee } from "./Specs/Consignee"
import { StyleSheet, View } from "@react-pdf/renderer"
import { PlaceOfDelivery } from "./Specs/PlaceOfDelivery"
import { ComponentTable } from "./Components/Table"
import { Carrier } from "./Specs/Carrier"
import { AdrType, CarriersReservationsAndObservationsType, CashOnDeliveryType, CustomerCarrier, CustomerCarrierNode, DocumentsAttachedType, EstablishedInOnType, InstructionAsToPaymentForCarriageType, PlaceAndDateOfTakingOverTheGoodsType, Plate, ProductsNodeType, ProductsType, SendersInstructionsType, SpecialAgreementsType, ToBePaidByType } from "./types"
import { SuccessiveCarrier } from "./Specs/SuccessiveCarrier"
import { PlaceAndDateOfTakingOverTheGoods } from "./Specs/PlaceAndDateOfTakingOverTheGoods"
import { DocumentsAttached } from "./Specs/DocumentsAttached"
import { CarriersReservationsAndObservations } from "./Specs/CarriersReservationsAndObservations"
import { SenderInstructions } from "./Specs/SenderInstructions"
import { InstructionAsToPaymentForCarriage } from "./Specs/InstructionAsToPaymentForCarriage"
import { SpecialAgreements } from "./Specs/SpecialAgreements"
import { ToBePaidBy } from "./Specs/ToBePaidBy"
import { Slot } from "./Components/Slot"
import { Products } from "./Specs/Products"
import { CashOnDelivery } from "./Specs/CashOnDelivery"
import { EstablishedInOn } from "./Specs/EstablishedInOn"
import { SignatureAndStampOfTheSender } from "./Specs/SignatureAndStampOfTheSender"
import { SignatureAndStampOfTheCarrier } from "./Specs/SignatureAndStampOfTheCarrier"
import { SignatureAndStampOfTheConsignee } from "./Specs/SignatureAndStampOfTheConsignee"

interface GeneratePDFProps { }

const customerCarrier = {
    name: "John Doe",
    address: "1234 Main St",
    postCode: "12345",
    city: "Springfield",
    country: "USA",
    vat: "123456789",
    eori: "987654321",
    telephone: "123456789",
} as CustomerCarrier

const plate = {
    plate: "123456",
} as Plate

const customerCarrierNode = {
    client: customerCarrier,
} as CustomerCarrierNode

const customerCarrierNodeWithPlate = {
    client: customerCarrier,
    plate: plate,
    plate2: plate
} as CustomerCarrierNode

const placeAndDateOfTakingOverTheGoods = {
    takeCity: "Springfield",
    takeDate: "2021-09-01",
    takeCountry: "USA",
} as PlaceAndDateOfTakingOverTheGoodsType

const documentsAttached = {
    documentsAttached1: "doc1",
    documentsAttached2: "doc2",
    documentsAttached3: "doc3",
} as DocumentsAttachedType

const carriersReservationsAndObservations = "reservations and observations" as CarriersReservationsAndObservationsType

const senderInstructions = "instructions" as SendersInstructionsType

const instructionAsToPaymentForCarriage = {
    instructions: "instructions",
    carriagePaid: "paid",
    carriageForward: "forward"
} as InstructionAsToPaymentForCarriageType

const specialAgreements = {
    name: "name",
    description: "description",
} as SpecialAgreementsType

const toBePaidBy = {
    carriageCharges: { sender: "23", currency: "EUR", consignee: "23", currency2: "EUR" },
    deductions: { sender: "23", consignee: "23" },
    balance: { sender: "23", consignee: "23" },
    supplementaryCharges: { sender: "23", consignee: "23" },
    miscellaneous: { sender: "23", consignee: "23" },
    cargoInsurance: { sender: "23", consignee: "23" },
    totalToBePaid: { sender: "161", currency: "EUR", consignee: "161", currency2: "EUR" },
} as ToBePaidByType

const productsNode = {
    marksAndNos: "marks and nos",
    numberOfPackages: "number of packages",
    methodOfPacking: "method of packing",
    natureOfTheGoods: "nature of the goods",
    statisticalNumber: "statistical number",
    grossWeightInKg: 23,
    volumeInM3: 23,
} as ProductsNodeType

const products = [
    productsNode,
    productsNode,
    productsNode,
    productsNode,
    productsNode,
    productsNode,
] as ProductsType

const adr = {
    adrClass: "a",
    adrNumber: "a",
    adrLetter: "a",
    adr: "a",
} as AdrType

const cashOnDelivery = "cash on delivery" as CashOnDeliveryType

const establishedInOn = {
    city: "city",
    date: "2021-09-01",
} as EstablishedInOnType

const signatureAndStamp = {
    signature: "https://upload.wikimedia.org/wikipedia/commons/5/58/Signature_of_Kazimira_Prunskienė.png",
    stamp: "stamp",
}

export const GeneratePDF: FC<GeneratePDFProps> = () => {
    const language = [Languages.en, Languages.de, Languages.pl]
    const documentId = "d7f6c531-f1a1-46b6-8014-5a60b06ed252"
    const cmrNo = "123456789"
    return <PDFDocument language={language} documentId={documentId} time={new Date().getTime()} documentUrl="https://cmreasy.com">
        {({ mode, language }) => {
            return <Slot type="col" mode={mode} wrapperStyle={{ flex: 1 }}>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <Sender data={customerCarrierNode} language={language} mode={mode} />
                    <CMRNo cmrNo={cmrNo} language={language} mode={mode} />
                </Slot>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <Consignee data={customerCarrierNode} language={language} mode={mode} />
                    <Carrier data={customerCarrierNodeWithPlate} language={language} mode={mode} />
                </Slot>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <PlaceOfDelivery data={customerCarrierNode} language={language} mode={mode} />
                    <SuccessiveCarrier data={customerCarrierNodeWithPlate} language={language} mode={mode} />
                </Slot>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <Slot type="col" mode={mode}>
                        <PlaceAndDateOfTakingOverTheGoods data={placeAndDateOfTakingOverTheGoods} language={language} mode={mode} />
                        <DocumentsAttached data={documentsAttached} language={language} mode={mode} />
                    </Slot>
                    <CarriersReservationsAndObservations data={carriersReservationsAndObservations} language={language} mode={mode} />
                </Slot>
                <View style={{ flex: 1 }}>
                    <Products data={{ products, adr }} language={language} mode={mode} />
                </View>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <Slot type="col" mode={mode} wrapperStyle={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <SenderInstructions data={senderInstructions} language={language} mode={mode} />
                        </View>
                        <InstructionAsToPaymentForCarriage data={instructionAsToPaymentForCarriage} language={language} mode={mode} />
                    </Slot>
                    <Slot type="col" mode={mode}>
                        <SpecialAgreements data={specialAgreements} language={language} mode={mode} />
                        <ToBePaidBy data={toBePaidBy} language={language} mode={mode} />
                    </Slot>
                </Slot>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <EstablishedInOn data={establishedInOn} language={language} mode={mode} />
                    <CashOnDelivery data={cashOnDelivery} language={language} mode={mode} />
                </Slot>
                <Slot type="row" mode={mode} innerStyle={{ flex: 1 }}>
                    <SignatureAndStampOfTheSender data={signatureAndStamp} language={language} mode={mode} />
                    <SignatureAndStampOfTheCarrier data={signatureAndStamp} language={language} mode={mode} />
                    <SignatureAndStampOfTheConsignee data={signatureAndStamp} language={language} mode={mode} />
                </Slot>
            </Slot>
        }}
    </PDFDocument>
}

const styles = StyleSheet.create({
})