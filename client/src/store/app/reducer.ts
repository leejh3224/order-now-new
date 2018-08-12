import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { SELECT_STORE, SELECT_MENU } from 'store/actionTypes'
import { StateType } from 'typesafe-actions'

const selectedStore = handleActions(
  {
    [SELECT_STORE]: (_, action: any) => {
      return action.payload
    },
  },
  '',
)

const selectedMenu = handleActions(
  {
    [SELECT_MENU]: (_, action: any) => {
      return action.payload
    },
  },
  '',
)

const appReducer = combineReducers({
  selectedStore,
  selectedMenu,
})

export type AppReducer = StateType<typeof appReducer>
export default appReducer
