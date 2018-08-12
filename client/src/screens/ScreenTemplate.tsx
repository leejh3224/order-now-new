import * as React from 'react'
import { View, StyleSheet, ViewStyle, ScrollView } from 'react-native'

import { colors } from 'config/theme'

import Footer from 'components/base/Footer'

interface Props {
  footerContent?: React.ReactNode
  footerStyle?: ViewStyle
}

const ScreenTemplate: React.SFC<Props> = ({
  children,
  footerContent,
  footerStyle,
}) => (
  <View style={style.container}>
    {children}
    <Footer style={footerStyle}>{footerContent}</Footer>
  </View>
)

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

export default ScreenTemplate
