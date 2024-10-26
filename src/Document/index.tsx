import React, {FC} from 'react';
import {CMRNo} from './Specs/CMRNo';
import {PDFDocument} from './Document';
import {Languages} from './languages';
import {Sender} from './Specs/Sender';
import {Consignee} from './Specs/Consignee';
import {Document, View} from '@react-pdf/renderer';
import {PlaceOfDelivery} from './Specs/PlaceOfDelivery';
import {Carrier} from './Specs/Carrier';
import {SuccessiveCarrier} from './Specs/SuccessiveCarrier';
import {PlaceAndDateOfTakingOverTheGoods} from './Specs/PlaceAndDateOfTakingOverTheGoods';
import {DocumentsAttached} from './Specs/DocumentsAttached';
import {CarriersReservationsAndObservations} from './Specs/CarriersReservationsAndObservations';
import {SenderInstructions} from './Specs/SenderInstructions';
import {InstructionAsToPaymentForCarriage} from './Specs/InstructionAsToPaymentForCarriage';
import {SpecialAgreements} from './Specs/SpecialAgreements';
import {ToBePaidBy} from './Specs/ToBePaidBy';
import {Slot} from './Components/Slot';
import {Products} from './Specs/Products';
import {CashOnDelivery} from './Specs/CashOnDelivery';
import {EstablishedInOn} from './Specs/EstablishedInOn';
import {SignatureAndStampOfTheSender} from './Specs/SignatureAndStampOfTheSender';
import {SignatureAndStampOfTheCarrier} from './Specs/SignatureAndStampOfTheCarrier';
import {SignatureAndStampOfTheConsignee} from './Specs/SignatureAndStampOfTheConsignee';
import {FinalDocument} from './types';

interface GeneratePDFProps {
  document: FinalDocument;
  documentUrl: string;
  time: number;
  documentId: string;
  languages: Languages[];
}

export const GeneratePDF: FC<GeneratePDFProps> = ({
  document,
  documentId,
  documentUrl,
  time,
  languages,
}) => {
  const meta = {
    title: `CMREasy ${document.cmrNo}`,
    author: 'CMR Easy',
    subject: `CMR ${document.cmrNo}`,
    keywords: 'CMR, CMR Easy, CMR Easy',
    creator: 'CMR Easy',
    producer: 'CMR Easy',
    language: languages[0],
  } as React.ComponentProps<typeof Document>;
  return (
    <PDFDocument
      language={languages}
      documentId={documentId}
      time={time}
      documentUrl={documentUrl}
      meta={meta}
    >
      {({mode, languages}) => {
        return (
          <Slot type="col" mode={mode} wrapperStyle={{flex: 1}}>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <Sender data={document.sender} language={languages} mode={mode} />
              <CMRNo cmrNo={document.cmrNo} language={languages} mode={mode} />
            </Slot>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <Consignee
                data={document.consignee}
                language={languages}
                mode={mode}
              />
              <Carrier
                data={document.carrier}
                language={languages}
                mode={mode}
              />
            </Slot>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <PlaceOfDelivery
                data={document.placeOfDelivery}
                language={languages}
                mode={mode}
              />
              <SuccessiveCarrier
                data={document.successiveCarrier}
                language={languages}
                mode={mode}
              />
            </Slot>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <Slot type="col" mode={mode}>
                <PlaceAndDateOfTakingOverTheGoods
                  data={document.placeAndDateOfTakingOverTheGoods}
                  language={languages}
                  mode={mode}
                />
                <DocumentsAttached
                  data={document.documentsAttached}
                  language={languages}
                  mode={mode}
                />
              </Slot>
              <CarriersReservationsAndObservations
                data={document.carriersReservationsAndObservations}
                language={languages}
                mode={mode}
              />
            </Slot>
            <View style={{flex: 1}}>
              <Products
                data={{products: document.products, adr: document.adr}}
                language={languages}
                mode={mode}
              />
            </View>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <Slot type="col" mode={mode} wrapperStyle={{flex: 1}}>
                <View style={{flex: 1}}>
                  <SenderInstructions
                    data={document.sendersInstructions}
                    language={languages}
                    mode={mode}
                  />
                </View>
                <InstructionAsToPaymentForCarriage
                  data={document.instructionAsToPaymentForCarriage}
                  language={languages}
                  mode={mode}
                />
              </Slot>
              <Slot type="col" mode={mode}>
                <SpecialAgreements
                  data={document.specialAgreements}
                  language={languages}
                  mode={mode}
                />
                <ToBePaidBy
                  data={document.toBePaidBy}
                  language={languages}
                  mode={mode}
                />
              </Slot>
            </Slot>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <EstablishedInOn
                data={document.established}
                language={languages}
                mode={mode}
              />
              <CashOnDelivery
                data={document.cashOnDelivery}
                language={languages}
                mode={mode}
              />
            </Slot>
            <Slot type="row" mode={mode} innerStyle={{flex: 1}}>
              <SignatureAndStampOfTheSender
                data={document.signatureAndStampOfTheSender}
                language={languages}
                mode={mode}
              />
              <SignatureAndStampOfTheCarrier
                data={document.signatureAndStampOfTheCarrier}
                language={languages}
                mode={mode}
              />
              <SignatureAndStampOfTheConsignee
                data={document.signatureAndStampOfTheConsignee}
                language={languages}
                mode={mode}
              />
            </Slot>
          </Slot>
        );
      }}
    </PDFDocument>
  );
};
