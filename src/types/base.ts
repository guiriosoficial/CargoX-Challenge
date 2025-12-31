import type {
  DeliveryStatus,
  HistoryStatus,
  DocumentStatus,
  PaymentStatus,
  TruckTypes,
  BrazilianStates
} from './statusEnums'

interface IPerson {
  id: number
  name: string
}

interface IDatedEvents<T> {
  name: string
  at: Date,
  status: T
  translation?: string
}

interface IStatus {
  translation: string,
  status: DeliveryStatus
}

type ICustomer = IPerson

type ISalesPerson = IPerson

type ITruckerSeeker = IPerson

type IDocument = IDatedEvents<DocumentStatus>

type IPayment = IDatedEvents<PaymentStatus>

type IHistory = IDatedEvents<HistoryStatus>

interface ILocation {
  latitude: number
  longitude: number
  address: string
  number: string
  city: string
  state: BrazilianStates
  zip_code: string, //number
}

interface ITrucker {
  id: number
  name: string
  phone: string //number
  last_app_update_at: Date
  last_app_open_at: Date
  last_app_position_at: Date
  first_login_at: Date
  has_app: boolean
  app_version: string
}

interface ITruck {
  plate: string
  type: {
    id: number,
    name: TruckTypes
  }
}

export type {
  IPerson,
  IStatus,
  ICustomer,
  ISalesPerson,
  ITruckerSeeker,
  ILocation,
  ITrucker,
  ITruck,
  IDocument,
  IPayment,
  IHistory
}