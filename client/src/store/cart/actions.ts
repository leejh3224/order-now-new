import { ADD_TO_CART, REMOVE_FROM_CART } from 'store/actionTypes'
import { action } from 'typesafe-actions'

export const addToCart = (store: string, menuId: string, quantity: number) =>
  action(ADD_TO_CART, { store, menuId, quantity })

export const removeFromCart = (store: string, menuId: string) =>
  action(REMOVE_FROM_CART, { store, menuId })
