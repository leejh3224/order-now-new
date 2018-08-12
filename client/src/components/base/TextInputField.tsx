import * as React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'
import { FieldProps } from 'formik'

import { colors } from 'config/theme'

const BaseTextInputField: React.SFC<FieldProps<any> & TextInputProps> = ({
  field,
  form,
  ...props
}) => {
  return (
    <TextInput
      value={field.value}
      onChangeText={(text: string) => form.setFieldValue(field.name, text)}
      placeholder={props.placeholder}
      placeholderTextColor={colors.secondary}
      style={textInputStyle.container}
    />
  )
}

const FullSizeTextInput: React.SFC<FieldProps<any> & TextInputProps> = ({
  field,
  form,
  ...props
}) => {
  return (
    <TextInput
      value={field.value}
      onChangeText={(text: string) => form.setFieldValue(field.name, text)}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor || colors.primary}
      style={[textInputStyle.fullSize, props.style]}
      secureTextEntry={field.name === 'password'}
    />
  )
}

const textInputStyle: any = StyleSheet.create({
  container: {
    width: 240,
    borderWidth: 0.5,
    borderColor: colors.secondary,
    padding: 8,
    borderRadius: 3,
  },
  fullSize: {
    width: '100%',
    padding: 8,
    backgroundColor: colors.white,
  },
})

export { BaseTextInputField, FullSizeTextInput }
