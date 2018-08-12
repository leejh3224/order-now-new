import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { withFormik, Field, FormikProps } from 'formik'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import { FullSizeTextInput } from 'components/base/TextInputField'

import { colors } from 'config/theme'

interface FormValues {
  code: string
}

interface Props {
  initialFormValues: any
  submit: any
  mode: string
}

// TODO: 인풋에 남은 시간 tick 하면서 표시 예시) 05:00
const AuthCodeModal: React.SFC<FormikProps<FormValues> & Props> = ({
  submitForm,
  mode,
}) => {
  const modeText = mode === 'signUp' ? '가입' : '로그인'
  return (
    <View style={style.container}>
      <ItemTitle style={style.title}>{modeText} 코드 입력</ItemTitle>
      <ItemDesc style={style.desc}>
        {modeText}이 거의 완료되었습니다. 전송된 {modeText} 코드를 입력해주세요.
      </ItemDesc>
      <Field name="code" component={FullSizeTextInput} />
      <TouchableOpacity style={style.button} onPress={submitForm}>
        <ItemDesc style={style.buttonText}>확인</ItemDesc>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 80,
    alignItems: 'flex-start',
  },
  title: {
    marginVertical: 20,
  },
  desc: {
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: colors.secondary,
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
})

export default withFormik<any, FormValues>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues,
  handleSubmit: (values, { props, resetForm }) =>
    props.submit(values, { resetForm }),
})(AuthCodeModal)
