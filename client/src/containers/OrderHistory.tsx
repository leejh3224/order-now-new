import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'

import OrderHistoryScreen from 'screens/OrderHistory'

class OrderHistory extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: '주문 내역',
  }

  render() {
    return <OrderHistoryScreen />
  }
}

export default OrderHistory
