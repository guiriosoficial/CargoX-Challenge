type DeliveryStatus = 'delivered' | 'scheduled' | 'in_transit'

type HistoryStatus = 'scheduled' | 'going-collect' | 'queue' | 'chargind'

type DocumentStatus = 'emitted' | 'ok' | ''

type PaymentStatus = 'emitted' | 'ok' | ''

type TruckTypes = 'Caminhão Baú' | 'Van'

type BrazilianStates = 'SP' | 'RJ'

export type {
  DeliveryStatus,
  HistoryStatus,
  DocumentStatus,
  PaymentStatus,
  TruckTypes,
  BrazilianStates
}