import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Auth } from 'aws-amplify'

import SignInScreen from 'screens/SignIn'
import { FormValues } from 'components/form/SignInForm'

class SignIn extends React.Component<NavigationScreenProps> {
  initializeFormValues = () => ({
    username: '',
    password: '',
  })

  submit = async (values: FormValues, { resetForm }: any) => {
    const { username, password } = values
    const { navigation } = this.props

    try {
      const user = await Auth.signIn(username, password)

      resetForm()
      navigation.navigate('authCode', {
        user,
        mode: 'signIn',
      })
    } catch (error) {
      console.log(error)
    }
  }

  goToSignUp = () => {
    this.props.navigation.navigate('signUp')
  }

  render() {
    return (
      <SignInScreen
        initialFormValues={this.initializeFormValues()}
        submit={this.submit}
        goToSignUp={this.goToSignUp}
      />
    )
  }
}

export default SignIn
