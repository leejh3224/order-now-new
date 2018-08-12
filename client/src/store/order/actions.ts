import {
  UPDATE_OPTIONS,
  UPDATE_ORDER_STATUS,
  CALL_API,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  RESET_OPTIONS,
} from 'store/actionTypes'
import { action } from 'typesafe-actions'
import { IOption } from 'store/types'

import { OrderStatus } from 'store/order/order-status'

export const updateOptions = (options: IOption) =>
  action(UPDATE_OPTIONS, options)

export const updateOrderStatus = (status: OrderStatus) =>
  action(UPDATE_ORDER_STATUS, status)

export const placeOrder = ({ username, menu, is_packaged, quantity }: any) =>
  action(CALL_API, {
    types: [PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_ERROR],
    endpoint: '/orders',
    method: 'post',
    body: {
      username,
      menu,
      is_packaged,
      quantity,
    },
  })

export const resetOptions = () => action(RESET_OPTIONS)
