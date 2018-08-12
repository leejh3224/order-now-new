import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { SET_USER } from 'store/actionTypes'
import { StateType } from 'typesafe-actions'

const profile = handleActions(
  {
    [SET_USER]: (state: any, action: any) => {
      return action.payload || state
    },
  },
  null,
)

const favoriteStores = handleActions({}, [])

const customMenus = handleActions({}, [])

export type UserReducer = {
  profile: StateType<typeof profile>
  favoriteStores: StateType<typeof favoriteStores>
  customMenus: StateType<typeof customMenus>
}

export default combineReducers<UserReducer>({
  profile,
  favoriteStores,
  customMenus,
})
