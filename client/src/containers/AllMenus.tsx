import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import AllMenusScreen from 'screens/AllMenus'

class AllMenus extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: '전체 메뉴',
  }

  render() {
    return <AllMenusScreen />
  }
}

export default AllMenus
