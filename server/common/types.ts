type Amount = '없이' | '적게' | '보통' | '많이'
type Cup = '일회용컵' | '머그컵' | '개인컵'
type Size = 'small' | 'regular' | 'large'
type OrderStatus =
  | 'NOT_CONFIRMED'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'READY'
  | 'DELIVERED'
  | 'FAILED'

interface IQuantityOption {
  name: string
  number_of_shots: number
}

interface IAmountOption {
  name: string
  amount: Amount
}

export interface IOption {
  ice: Amount
  coffee: IQuantityOption
  syrup: IQuantityOption[]
  whipping_cream: Amount
  drizzle: IAmountOption[]
  user_request?: string
}

export interface IMenu {
  _id: string
  store_id: string
  name: string
  description?: string
  price: number
  image?: string
  size: Size
  cup: Cup
  options: IOption
}

export interface IOrder {
  _id: string
  username: string
  menus: Array<IMenu>

  order_status: OrderStatus
  order_failed_reason: string

  // 음료/푸드 포장 여부
  is_packaged: boolean
  quantity: number
}

interface ILocation {
  type: 'Point'
  coordinates: Array<number>
}

export interface IStore {
  _id: string
  name: string
  address: string
  location: ILocation
  facade_image?: string
  phone_number: string
  menus: Array<IMenu>
  orders: Array<string>

  // computed value
  distance: number
}
