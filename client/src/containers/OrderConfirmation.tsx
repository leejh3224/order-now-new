import * as React from 'react'
import { connect } from 'react-redux'

import OrderConfirmationScreen from 'screens/OrderConfirmation'
import { RootState } from 'store/rootReducer'
import {
  getSelectedStore,
  getSelectedMenu,
  getOverrideOptions,
} from 'store/selectors'
import { IStore, IMenu } from 'store/types'
import { placeOrder, resetOptions } from 'store/order/actions'
import { ActionType } from 'typesafe-actions'
import { cupNames, sizeNames } from 'utils/constants'

interface Props {
  store: IStore
  menu: IMenu
  overrideOptions: any
  placeOrder: (
    { username, menus, is_packaged }: any,
  ) => ActionType<typeof placeOrder>
  resetOptions: () => ActionType<typeof resetOptions>
}

class OrderConfirmation extends React.Component<Props> {
  static navigationOptions = {
    title: '주문하기',
  }

  initializeFormValues = () => ({
    isPackaged: false,
  })

  submit = (values: any) => {
    const { cup, size, quantity } = this.props.overrideOptions

    const newOrder = {
      ...this.props.menu,
      cup: cupNames[cup],
      size: sizeNames[size],
    }

    this.props.placeOrder({
      username: 'leejh3224',
      menu: newOrder,
      is_packaged: values.isPackaged,
      quantity,
    })

    this.props.resetOptions()
  }

  render() {
    const { store, menu, overrideOptions } = this.props

    return (
      <OrderConfirmationScreen
        store={store}
        menu={menu}
        overrideOptions={overrideOptions}
        initialFormValues={this.initializeFormValues()}
        submit={this.submit}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  store: getSelectedStore(state),
  menu: getSelectedMenu(state),
  overrideOptions: getOverrideOptions(state),
})

export default connect(
  mapStateToProps,
  { placeOrder, resetOptions },
)(OrderConfirmation)
