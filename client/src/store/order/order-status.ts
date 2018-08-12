export const NOT_CONFIRMED = 'NOT_CONFIRMED'
export const CONFIRMED = 'CONFIRMED'
export const CANCELLED = 'CANCELLED'
export const READY = 'READY'
export const DELIVERED = 'DELIVERED'
export const FAILED = 'FAILED'

export type OrderStatus =
  | typeof NOT_CONFIRMED
  | typeof CONFIRMED
  | typeof CANCELLED
  | typeof READY
  | typeof DELIVERED
  | typeof FAILED
