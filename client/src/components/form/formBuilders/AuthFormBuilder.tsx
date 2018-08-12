import * as React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Field } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'

import { colors } from 'config/theme'

import { FullSizeTextInput } from 'components/base/TextInputField'

interface AuthField {
  key: string
  name: string
  placeholder: string
  icon: string
}

interface Props {
  data: AuthField[]
  header: any
  footer: any
}

const AuthFormBuilder: React.SFC<Props> = ({ data, header, footer }) => {
  return (
    <KeyboardAwareScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View key={item.name} style={style.inputContainer}>
              <Ionicons
                name={item.icon}
                size={45}
                color={colors.primary}
                style={style.icon}
              />
              <Field
                name={item.name}
                component={FullSizeTextInput}
                placeholder={item.placeholder}
                style={style.input}
              />
            </View>
          )
        }}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
      />
    </KeyboardAwareScrollView>
  )
}

const style = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    marginVertical: 4,
    fontSize: 20,
    padding: 16,
    paddingLeft: 56,
  },
  icon: {
    position: 'absolute',
    top: 8,
    left: 13,
    zIndex: 2,
  },
})

export default AuthFormBuilder
