import { combineReducers } from 'redux'
import merge from 'lodash.merge'
import { IStore, IMenu } from 'store/types'
import app, { AppReducer } from 'store/app/reducer'
import order, { OrderReducer } from 'store/order/reducer'
import user, { UserReducer } from 'store/user/reducer'
import cart, { CartReducer } from 'store/cart/reducer'

const entities = (state = { stores: {}, menus: {} }, action: any) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  return state
}

const errorMessage = (state = '', action: any) => {
  if (action.error) {
    return action.error
  }

  return state
}

const reducers = {
  app,
  entities,
  errorMessage,
  order,
  user,
  cart,
}

type EntityReducer = {
  stores: {
    [key: string]: IStore
  }
  menus: {
    [key: string]: IMenu
  }
}

export type RootState = {
  app: AppReducer
  entities: EntityReducer
  errorMessage: string
  order: OrderReducer
  user: UserReducer
  cart: CartReducer
}

export default combineReducers<RootState>(reducers as any)
