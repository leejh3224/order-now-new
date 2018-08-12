import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import Avatar from 'components/base/Avatar'
import AuthFormBuilder from 'components/form/formBuilders/AuthFormBuilder'

import style from 'components/form/AuthFormStyle'

export interface FormValues {
  username: string
  password: string
}

interface Props {
  handleSubmit: any
  goToSignUp: () => void
}

const formData = [
  {
    key: '1',
    name: 'username',
    placeholder: '이메일',
    icon: 'ios-mail-outline',
  },
  {
    key: '2',
    name: 'password',
    placeholder: '비밀번호',
    icon: 'ios-lock',
  },
]

const SignInForm: React.SFC<Props> = ({ handleSubmit, goToSignUp }) => (
  <View style={style.background}>
    <AuthFormBuilder
      data={formData}
      header={() => (
        <View style={style.avatarContainer}>
          <Avatar
            image={require('../../../assets/splash-beige.png')}
            size={180}
          />
        </View>
      )}
      footer={() => (
        <React.Fragment>
          <TouchableOpacity style={style.submitButton} onPress={handleSubmit}>
            <ItemTitle style={style.submitText}>로그인</ItemTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <ItemDesc style={style.forgotPassword}>
              비밀번호를 잊으셨나요?
            </ItemDesc>
          </TouchableOpacity>
          <TouchableOpacity style={style.signupButton} onPress={goToSignUp}>
            <ItemTitle style={style.signupText}>가입하기</ItemTitle>
          </TouchableOpacity>
        </React.Fragment>
      )}
    />
  </View>
)

export default SignInForm
