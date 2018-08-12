import * as React from 'react'
import { TabNavigatorConfig, StackNavigatorConfig } from 'react-navigation'

import GoToCart from 'components/base/GoToCart'

import { colors } from 'config/theme'

export const selectStoreTabsConfig: TabNavigatorConfig = {
  initialRouteName: 'favoriteStores',
  tabBarOptions: {
    inactiveTintColor: colors.font,
    activeTintColor: colors.secondary,
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: colors.white,
    },
    indicatorStyle: {
      backgroundColor: colors.secondary,
    },
  },
}

export const selectMenuTabsConfig: TabNavigatorConfig = {
  initialRouteName: 'allMenus',
  tabBarOptions: {
    inactiveTintColor: colors.font,
    activeTintColor: colors.secondary,
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: colors.white,
    },
    indicatorStyle: {
      backgroundColor: colors.secondary,
    },
  },
}

export const mainStackConfig: StackNavigatorConfig = {
  initialRouteName: 'selectStore',
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('title') || '매장선택',
    headerRight: <GoToCart />,
    headerTintColor: colors.secondary,
    headerTitleStyle: {
      fontSize: 17,
    },
    headerStyle: {
      backgroundColor: colors.primary,
      borderBottomColor: 'transparent',
      marginRight: 12, // for cart icon
    },
    headerBackTitle: '뒤로',
  }),
}

export const authStackConfig: StackNavigatorConfig = {
  initialRouteName: 'signIn',
  mode: 'modal',
  headerMode: 'none',
}

export const modalStackConfig: StackNavigatorConfig = {
  initialRouteName: 'main',
  mode: 'modal',
  headerMode: 'none',
}
