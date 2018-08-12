import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import MenuDetailScreen from 'screens/MenuDetail'
import { RootState } from 'store/rootReducer'
import { getSelectedMenu } from 'store/selectors'
import { IMenu, IOption } from 'store/types'
import { updateOptions } from 'store/order/actions'
import { addToCart } from 'store/cart/actions'
import { ActionType } from 'typesafe-actions'

import { sizeNames, cupNames } from 'utils/constants'

interface Props {
  menu: IMenu
  updateOptions: (options: IOption) => ActionType<typeof updateOptions>
  addToCart: (
    store: string,
    menuId: string,
    quantity: number,
  ) => ActionType<typeof addToCart>
}

class MenuDetail extends React.Component<NavigationScreenProps & Props> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('storeName'),
    }
  }

  initializeFormValues = () => ({
    quantity: 1,
    size: sizeNames.indexOf(this.props.menu.size),
    cup: cupNames.indexOf(this.props.menu.cup),
  })

  submit = (values: any) => {
    this.props.updateOptions(values)
  }

  render() {
    const { menu, addToCart } = this.props

    return (
      <MenuDetailScreen
        menu={menu}
        initialFormValues={this.initializeFormValues()}
        submit={this.submit}
        addToCart={addToCart}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  menu: getSelectedMenu(state),
})

export default connect(
  mapStateToProps,
  { updateOptions, addToCart },
)(MenuDetail)
