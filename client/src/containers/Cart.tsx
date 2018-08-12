import * as React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty'

import { RootState } from 'store/rootReducer'
import { getCartInventory, getAllMenus } from 'store/selectors'
import { removeFromCart } from 'store/cart/actions'

import CartScreen from 'screens/Cart'

interface Props {
  cart: any
  allMenus: any
  removeFromCart: any
}

class Cart extends React.Component<Props> {
  static navigationOptions = {
    title: '장바구니',
  }

  initializeFormValues = () => {
    return this.props.cart
  }

  get listData() {
    return Object.keys(this.props.cart).map(store => ({
      title: store,
      data: Object.keys(this.props.cart[store]),
    }))
  }

  render() {
    return (
      <CartScreen
        initialFormValues={this.initializeFormValues()}
        data={this.listData}
        allMenus={this.props.allMenus}
        removeFromCart={this.props.removeFromCart}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  cart: getCartInventory(state),
  allMenus: getAllMenus(state),
})

export default connect(
  mapStateToProps,
  { removeFromCart },
)(Cart)
