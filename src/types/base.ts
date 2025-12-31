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

interface ICustomer extends IPerson {}

interface ISalesPerson extends IPerson {}

interface ITruckerSeeker extends IPerson {}

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

interface IDocument extends IDatedEvents<DocumentStatus> {}

interface IPayment extends IDatedEvents<PaymentStatus> {}

interface IHistory extends IDatedEvents<HistoryStatus> {}

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