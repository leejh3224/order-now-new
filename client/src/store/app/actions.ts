import { SELECT_STORE, SELECT_MENU } from 'store/actionTypes'
import { action } from 'typesafe-actions'

export const selectStore = (storeId: string) => action(SELECT_STORE, storeId)
export const selectMenu = (menuId: string) => action(SELECT_MENU, menuId)
