import { RootState } from 'store/rootReducer'
import { createSelector } from 'reselect'

export const getStores = ({ entities }: RootState) => entities.stores

export const getSelectedStore = ({ entities, app }: RootState) =>
  entities.stores[app.selectedStore]

export const getAllMenus = ({ entities }: RootState) => entities.menus

export const getStoreMenus = createSelector(
  getSelectedStore,
  getAllMenus,
  (store, menus) => store.menus.map((id: any) => menus[id]),
)

export const getSelectedMenu = ({ entities, app }: RootState) =>
  entities.menus[app.selectedMenu]

export const getOverrideOptions = ({ order }: RootState) =>
  order.overrideOptions

export const getCartInventory = ({ cart }: RootState) => cart
