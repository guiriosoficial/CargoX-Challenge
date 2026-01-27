export type FreightStatus =
  | 'waiting'
  | 'going_collect'
  | 'collection_queue'
  | 'loading'
  | 'in_transit'
  | 'discharge_queue'
  | 'discharging'
  | 'delivered'

export type HistoryStatus =
  | 'waiting'
  | 'going_collect'
  | 'collection_queue'
  | 'loading'
  | 'in_transit'
  | 'discharge_queue'
  | 'discharging'
  | 'delivered'

export type DocumentStatus = 'emitted' | 'ok' | ''

export type PaymentStatus = 'emitted' | 'ok' | ''