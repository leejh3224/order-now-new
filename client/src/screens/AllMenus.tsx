import * as React from 'react'
import { StyleSheet } from 'react-native'
import ScreenTemplate from 'screens/ScreenTemplate'

import MenuList from 'components/list/MenuList'
import AllMenusFooter from 'components/allMenus/AllMenusFooter'

const AllMenus: React.SFC = () => (
  <ScreenTemplate
    footerContent={<AllMenusFooter />}
    footerStyle={style.container}
  >
    <MenuList />
  </ScreenTemplate>
)

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
})

export default AllMenus
