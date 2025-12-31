import type { IStatus, ICustomer } from './base'

interface IDeliverie {
  id: number,
  customer_tracking_number: number,
  customer: ICustomer,
  last_status: IStatus
}

export type {
  IDeliverie
}
