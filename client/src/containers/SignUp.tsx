import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Auth } from 'aws-amplify'

import SignUpScreen from 'screens/SignUp'
import { FormValues } from 'components/form/SignUpForm'

class SignUp extends React.Component<NavigationScreenProps> {
  initializeFormValues = () => ({
    name: '',
    username: '',
    password: '',
    phoneNumber: '',
  })

  // cognito only accepts intl phone-number format
  private toIntlPhoneNumber(phoneNumber: string) {
    return phoneNumber.replace(/^0/, '+82')
  }

  submit = async (values: FormValues, { resetForm }: any) => {
    const { name, username, password, phoneNumber } = values
    const { navigation } = this.props

    navigation.navigate('authCode', {
      username,
      mode: 'signUp',
    })

    // try {
    //   await Auth.signUp({
    //     username,
    //     password,
    //     attributes: {
    //       name,
    //       phone_number: this.toIntlPhoneNumber(phoneNumber),
    //     },
    //   })

    //   resetForm()
    //   navigation.navigate('authCode')
    // } catch (error) {
    //   console.error(error)
    // }
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SignUpScreen
        initialFormValues={this.initializeFormValues()}
        submit={this.submit}
        goBack={this.goBack}
      />
    )
  }
}

export default SignUp
