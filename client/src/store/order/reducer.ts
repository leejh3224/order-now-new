import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { StateType } from 'typesafe-actions'

import {
  UPDATE_OPTIONS,
  UPDATE_ORDER_STATUS,
  RESET_OPTIONS,
} from 'store/actionTypes'

const overrideOptions = handleActions(
  {
    [RESET_OPTIONS]: () => {
      return {}
    },
    [UPDATE_OPTIONS]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
  {} as any,
)

const status = handleActions(
  {
    [UPDATE_ORDER_STATUS]: (state: any, action) => {
      return action || state
    },
  },
  null,
)

export type OrderReducer = {
  overrideOptions: StateType<typeof overrideOptions>
  status: StateType<typeof status>
}

export default combineReducers<OrderReducer>({
  overrideOptions,
  status,
})
