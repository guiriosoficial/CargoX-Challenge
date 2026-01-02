type BrazilianStates = | 'AC' | 'AL'| 'AP'| 'AM'| 'BA'| 'CE'| 'DF'| 'ES'| 'GO' | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' | 'PE' | 'PI' | 'RJ' | 'RN' | 'RS' | 'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO';

type DeliveryStatus = 'waiting' | 'going_collect' | 'collection_queue' | 'loading' | 'in_transit' | 'discharge_queue' | 'discharge_queue' | 'discharging' | 'delivered'

type HistoryStatus = 'waiting' | 'going_collect' | 'collection_queue' | 'loading' | 'in_transit' | 'discharge_queue' | 'discharge_queue' | 'discharging' | 'delivered'

type DocumentStatus = 'emitted' | 'ok' | ''

type PaymentStatus = 'emitted' | 'ok' | ''

export type {
  DeliveryStatus,
  HistoryStatus,
  DocumentStatus,
  PaymentStatus,
  BrazilianStates
}