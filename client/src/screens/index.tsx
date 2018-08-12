import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import {
  selectStoreTabsConfig,
  selectMenuTabsConfig,
  mainStackConfig,
  modalStackConfig,
  authStackConfig,
} from 'screens/navigatorOptions'

import * as React from 'react'
import { SearchBar } from 'react-native-elements'
import { colors } from 'config/theme'

import ClosestStores from 'containers/ClosestStores'
import AllMenus from 'containers/AllMenus'
import MenuDetail from 'containers/MenuDetail'
import MenuOptions from 'containers/MenuOptions'
import OrderConfirmation from 'containers/OrderConfirmation'
import OrderStatusModal from 'screens/OrderStatusModal'
import MapView from 'containers/MapView'
import SignUp from 'containers/SignUp'
import SignIn from 'containers/SignIn'
import AuthCodeModal from 'containers/AuthCodeModal'
import OrderHistory from 'containers/OrderHistory'
import AddCustomMenuModal from 'containers/AddCustomMenu'
import FavoriteStores from 'containers/FavoriteStores'
import AppBootstrap from 'screens/AppBootstrap'
import Cart from 'containers/Cart'

const selectStoreTabs = createMaterialTopTabNavigator(
  {
    favoriteStores: FavoriteStores,
    closestStores: ClosestStores,
    mapView: MapView,
  },
  selectStoreTabsConfig,
)

const selectStoreTabsWithSearchInput = createStackNavigator(
  {
    selectStore: selectStoreTabs,
  },
  {
    initialRouteKey: 'selectStore',
    navigationOptions: {
      headerTitle: (
        <SearchBar
          placeholder="가게 이름을 입력해주세요."
          containerStyle={{
            flex: 1,
            backgroundColor: colors.primary,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          inputStyle={{ backgroundColor: colors.white, fontSize: 13 }}
        />
      ),
      headerRight: null,
      headerLeft: null,
      headerForceInset: {
        top: 'never',
        bottom: 'never',
      },
    },
  },
)

const selectMenuTabs = createMaterialTopTabNavigator(
  {
    allMenus: AllMenus,
  },
  selectMenuTabsConfig,
)

const mainStack = createStackNavigator(
  {
    selectStore: selectStoreTabsWithSearchInput,
    selectMenu: selectMenuTabs,
    menuDetail: MenuDetail,
    menuOptions: MenuOptions,
    orderConfirmation: OrderConfirmation,
    orderHistory: OrderHistory,
    cart: Cart,
  },
  mainStackConfig,
)

const authStack = createStackNavigator(
  {
    signIn: SignIn,
    signUp: SignUp,
    authCode: AuthCodeModal,
  },
  authStackConfig,
)

const modalStack = createStackNavigator(
  {
    main: mainStack,
    orderStatus: OrderStatusModal,
    addCustomMenu: AddCustomMenuModal,
  },
  modalStackConfig,
)

export default createSwitchNavigator(
  {
    appLoading: AppBootstrap,
    app: modalStack,
    auth: authStack,
  },
  {
    initialRouteName: 'appLoading',
  },
)
