import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'

import AuthCodeModalScreen from 'screens/AuthCodeModal'

import { loadUser } from 'store/user/actions'

class AuthCodeModal extends React.Component<NavigationScreenProps> {
  initializeFormValues = () => ({
    code: '',
  })

  verifyCode = async (values: any, { resetForm }: any) => {
    const { navigation } = this.props
    const { code } = values
    const username = navigation.getParam('username')
    const user = navigation.getParam('user')
    const mode = navigation.getParam('mode')

    try {
      let result

      if (mode === 'signUp') {
        result = await Auth.confirmSignUp(username, code)
      } else {
        result = await Auth.confirmSignIn(user, code, 'SMS_MFA')
      }

      resetForm()

      if (result === 'SUCCESS') {
        loadUser()
        navigation.navigate('app')
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <AuthCodeModalScreen
        initialFormValues={this.initializeFormValues()}
        submit={this.verifyCode}
        mode={this.props.navigation.getParam('mode')}
      />
    )
  }
}

export default connect(
  null,
  { loadUser },
)(AuthCodeModal)
