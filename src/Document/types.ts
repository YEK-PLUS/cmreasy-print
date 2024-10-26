import z from "zod";
export const customerCarrierSchema = z
  .object({
    name: z.string(),
    country: z.string().optional().default(" "),
    city: z.string().optional().default(" "),
    postCode: z.string().optional().default(" "),
    telephone: z.string().optional().default(" "),
    address: z.string().optional().default(" "),
    vat: z.string().optional().default(" "),
    eori: z.string().optional().default(" "),
    additionalInfo: z.string().optional().default(" "),
    receiverEmails: z
      .array(
        z.object({
          receiverEmail: z.string(),
        })
      )
      .optional()
      .default([]),
  })
  .optional()
  .default({ name: " " });
export const plateSchema = z.object({
  plate: z.string().optional(),
  carrier: customerCarrierSchema.optional(),
});
export const customerCarrierNodeSchema = z.object({
  client: customerCarrierSchema
    .optional()
    .default(customerCarrierSchema.parse({ name: "" })),
  plate: plateSchema.optional().default(plateSchema.parse({})),
  plate2: plateSchema.optional().default(plateSchema.parse({})),
});
export const placeAndDateOfTakingOverTheGoodsSchema = z.object({
  takeCity: z.string(),
  takeDate: z.string(),
  takeCountry: z.string(),
});
export const documentsAttachedSchema = z.object({
  documentsAttached1: z.string().optional().default(""),
  documentsAttached2: z.string().optional().default(""),
  documentsAttached3: z.string().optional().default(""),
});
export const adrSchema = z.object({
  adrClass: z.string().optional().default(""),
  adrNumber: z.string().optional().default(""),
  adrLetter: z.string().optional().default(""),
  adr: z.string().optional().default(""),
});
export const sendersInstructionsSchema = z.string();
export const instructionAsToPaymentForCarriageSchema = z.object({
  instructions: z.string(),
  carriagePaid: z.string(),
  carriageForward: z.string(),
});
export const carriersReservationsAndObservationsSchema = z.string();
export const specialAgreementsSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const toBePaidByNodeSchema = z.object({
  sender: z.string().optional().default(""),
  currency: z.string().optional().default(""),
  consignee: z.string().optional().default(""),
  currency2: z.string().optional().default(""),
});
export const toBePaidBySchema = z.object({
  carriageCharges: toBePaidByNodeSchema,
  deductions: toBePaidByNodeSchema,
  balance: toBePaidByNodeSchema,
  supplementaryCharges: toBePaidByNodeSchema,
  miscellaneous: toBePaidByNodeSchema,
  cargoInsurance: toBePaidByNodeSchema,
  totalToBePaid: toBePaidByNodeSchema,
});
export const establishedInOnSchema = z.object({
  city: z.string(),
  date: z.string(),
});
export const cashOnDeliverySchema = z.string();
export const productsNodeSchema = z.object({
  marksAndNos: z.string().optional().default(""),
  numberOfPackages: z.string().optional().default(""),
  methodOfPacking: z.string().optional().default(""),
  natureOfTheGoods: z.string().optional().default(""),
  statisticalNumber: z.string().optional().default(""),
  grossWeightInKg: z.number().optional(),
  volumeInM3: z.number().optional(),
});
export const productsSchema = z.array(productsNodeSchema);
export const cmrNoSchema = z.string();
export const signatureAndStampSchema = z.object({
  signature: z.string().optional(),
  stamp: z.string().optional(),
});
export const signatureAndStampOfTheSenderSchema = z.object({
  ...signatureAndStampSchema.shape,
});
export const signatureAndStampOfTheCarrierSchema = z.object({
  ...signatureAndStampSchema.shape,
});
export const signatureAndStampOfTheConsigneeSchema = z.object({
  ...signatureAndStampSchema.shape,
});

export const finalDocumentSchema = z.object({
  sender: customerCarrierNodeSchema,
  consignee: customerCarrierNodeSchema,
  placeOfDelivery: customerCarrierNodeSchema,
  placeAndDateOfTakingOverTheGoods:
    placeAndDateOfTakingOverTheGoodsSchema,
  documentsAttached: documentsAttachedSchema,
  products: productsSchema,
  adr: adrSchema,
  sendersInstructions: sendersInstructionsSchema,
  instructionAsToPaymentForCarriage:
    instructionAsToPaymentForCarriageSchema,
  carriersReservationsAndObservations:
    carriersReservationsAndObservationsSchema,
  specialAgreements: specialAgreementsSchema,
  toBePaidBy: toBePaidBySchema,
  established: establishedInOnSchema,
  carrier: customerCarrierNodeSchema,
  successiveCarrier: customerCarrierNodeSchema,
  cashOnDelivery: cashOnDeliverySchema,
  cmrNo: cmrNoSchema,
  signatureAndStampOfTheSender: signatureAndStampOfTheSenderSchema,
  signatureAndStampOfTheCarrier: signatureAndStampOfTheCarrierSchema,
  signatureAndStampOfTheConsignee: signatureAndStampOfTheConsigneeSchema,
});
export type FinalDocument = z.infer<typeof finalDocumentSchema>;
export type Customer = z.infer<typeof customerCarrierNodeSchema>;
export type Carrier = z.infer<typeof customerCarrierNodeSchema>;
export type CustomerCarrier = z.infer<typeof customerCarrierSchema>;
export type CustomerCarrierNode = z.infer<typeof customerCarrierNodeSchema>;
export type Plate = z.infer<typeof plateSchema>;
export type PlaceAndDateOfTakingOverTheGoodsType = z.infer<
  typeof placeAndDateOfTakingOverTheGoodsSchema
>;
export type DocumentsAttachedType = z.infer<typeof documentsAttachedSchema>;
export type AdrType = z.infer<typeof adrSchema>;
export type SendersInstructionsType = z.infer<typeof sendersInstructionsSchema>;
export type InstructionAsToPaymentForCarriageType = z.infer<
  typeof instructionAsToPaymentForCarriageSchema
>;
export type CarriersReservationsAndObservationsType = z.infer<
  typeof carriersReservationsAndObservationsSchema
>;
export type SpecialAgreementsType = z.infer<typeof specialAgreementsSchema>;
export type EstablishedInOnType = z.infer<typeof establishedInOnSchema>;
export type ToBePaidByType = z.infer<typeof toBePaidBySchema>;
export type CmrNo = z.infer<typeof cmrNoSchema>;
export type ProductsNodeType = z.infer<typeof productsNodeSchema>;
export type ProductsType = z.infer<typeof productsSchema>;
export type CashOnDeliveryType = z.infer<typeof cashOnDeliverySchema>;
export type SignatureAndStampType = z.infer<typeof signatureAndStampSchema>;
export type SignatureAndStampOfTheSenderType = z.infer<
  typeof signatureAndStampOfTheSenderSchema
>;
export type SignatureAndStampOfTheCarrierType = z.infer<
  typeof signatureAndStampOfTheCarrierSchema
>;
export type SignatureAndStampOfTheConsigneeType = z.infer<
  typeof signatureAndStampOfTheConsigneeSchema
>;
