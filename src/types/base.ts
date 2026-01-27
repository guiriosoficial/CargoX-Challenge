import type { BrazilianStates } from './brazilianStates'
import type {
  FreightStatus,
  HistoryStatus,
  DocumentStatus,
  PaymentStatus,
} from './status'

export interface IPerson {
  id: number
  name: string
}

export interface IDatedEvents<T> {
  name: string
  at: Date,
  status: T
  translation: string
}

export interface IStatus {
  translation: string,
  status: FreightStatus
}

export type ICustomer = IPerson

export type ISalesPerson = IPerson

export type ITruckerSeeker = IPerson

export type IDocument = IDatedEvents<DocumentStatus>

export type IPayment = IDatedEvents<PaymentStatus>

export type IHistory = IDatedEvents<HistoryStatus>

export interface ILocation {
  latitude: number
  longitude: number
  address: string
  number: string
  city: string
  state: BrazilianStates
  zip_code: string | number
}

export interface ITrucker {
  id: number
  name: string
  phone: string
  last_app_update_at: Date
  last_app_open_at: Date
  last_app_position_at: Date
  first_login_at: Date
  has_app: boolean
  app_version: string
}

export interface ITruckType {
  id: number
  name: string
}

export interface ITruck {
  plate: string
  type: ITruckType
}
