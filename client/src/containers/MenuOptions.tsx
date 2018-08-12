import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import { getSelectedMenu } from 'store/selectors'
import { RootState } from 'store/rootReducer'
import { IMenu, IOption } from 'store/types'
import { updateOptions } from 'store/order/actions'
import { ActionType } from 'typesafe-actions'

import MenuOptionsScreen from 'screens/MenuOptions'

import { quantityNames } from 'utils/constants'

interface Props {
  menu: IMenu
  updateOptions: (options: IOption) => ActionType<typeof updateOptions>
}

class MenuOptions extends React.Component<NavigationScreenProps & Props> {
  static navigationOptions = {
    title: '옵션',
  }

  initializeFormValues = () => {
    const { options } = this.props.menu

    const initialValues: {
      [key: string]: any
    } = {
      ice: quantityNames.indexOf(options.ice),
      whipping_cream: quantityNames.indexOf(options.whipping_cream),
      user_request: '',
    }

    options.syrup.forEach(syrup => {
      initialValues[syrup.name] = syrup.number_of_shots
    })

    options.drizzle.forEach(drizzle => {
      initialValues[drizzle.name] = quantityNames.indexOf(drizzle.amount)
    })

    return initialValues
  }

  submit = (values: any) => {
    this.props.updateOptions(values)
  }

  render() {
    const { menu } = this.props

    return (
      <MenuOptionsScreen
        menu={menu}
        initialFormValue={this.initializeFormValues()}
        submit={this.submit}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  menu: getSelectedMenu(state),
})

export default connect(
  mapStateToProps,
  { updateOptions },
)(MenuOptions)
