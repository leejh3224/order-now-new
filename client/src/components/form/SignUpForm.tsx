import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { HugeTitle, ItemTitle, ItemDesc } from 'components/base/Fonts'
import AuthFormBuilder from 'components/form/formBuilders/AuthFormBuilder'

import style from 'components/form/AuthFormStyle'

const formData = [
  {
    key: '1',
    name: 'name',
    placeholder: '이름 (주문 시 사용)',
    icon: 'ios-person',
  },
  {
    key: '2',
    name: 'username',
    placeholder: '이메일',
    icon: 'ios-mail-outline',
  },
  {
    key: '3',
    name: 'password',
    placeholder: '비밀번호',
    icon: 'ios-lock',
  },
  {
    key: '4',
    name: 'phoneNumber',
    placeholder: '전화번호',
    icon: 'ios-phone-portrait',
  },
]

export interface FormValues {
  name: string
  username: string
  password: string
  phoneNumber: string
}

interface Props {
  handleSubmit: any
  goBack: () => void
}

const SignUpForm: React.SFC<Props> = ({ handleSubmit, goBack }) => (
  <View style={style.background}>
    <AuthFormBuilder
      data={formData}
      header={() => <HugeTitle style={style.screenTitle}>SIGN UP</HugeTitle>}
      footer={() => (
        <React.Fragment>
          <TouchableOpacity style={style.submitButton} onPress={handleSubmit}>
            <ItemTitle style={style.submitText}>가입 코드 전송</ItemTitle>
          </TouchableOpacity>
          <TouchableOpacity style={style.goBackButton} onPress={goBack}>
            <ItemDesc style={style.goBackText}>돌아가기</ItemDesc>
          </TouchableOpacity>
        </React.Fragment>
      )}
    />
  </View>
)

export default SignUpForm
