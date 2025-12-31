import type {
  ICustomer,
  ISalesPerson,
  ITruckerSeeker,
  ILocation,
  ITrucker,
  ITruck,
  IDocument,
  IPayment,
  IHistory
} from '@/types/base';

interface IRoute {
  origin: ILocation,
  destination: ILocation,
  lastAppUpdateAt: Date
}

interface IDelivery {
  id: number,
  customer_tracking_number: number,
  customer: ICustomer,
  trucker: ITrucker,
  trucks: ITruck[]
  origin: ILocation,
  destination: ILocation,
  trucker_seeker: ITruckerSeeker,
  salesperson: ISalesPerson,
  pickup_date: Date,
  delivery_date: Date,
  estimated_time_of_arrival: Date,
  manual_input_estimated_time_of_arrival: Date,
  documents: IDocument[],
  payments: IPayment[],
  status_history: IHistory[]
}

export type {
  IDelivery,
  IRoute,
  ICustomer
}
