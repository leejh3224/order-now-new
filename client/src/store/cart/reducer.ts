import { handleActions } from 'redux-actions'
import { StateType } from 'typesafe-actions'

import { ADD_TO_CART, REMOVE_FROM_CART } from 'store/actionTypes'

const cart = handleActions(
  {
    [ADD_TO_CART]: (state, action) => {
      const { store, menuId, quantity } = action.payload
      return {
        ...state,
        [store]: {
          ...state[store],
          [menuId]:
            state[store] && state[store][menuId]
              ? state[store][menuId] + quantity
              : quantity,
        },
      }
    },
    [REMOVE_FROM_CART]: (state, action) => {
      const { store, menuId } = action.payload

      return {
        ...state,
        [store]: Object.keys(state[store]).filter(id => id != menuId),
      }
    },
  },
  {} as any,
)

export type CartReducer = StateType<typeof cart>

export default cart
