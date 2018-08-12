import * as React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

import { colors } from 'config/theme'

interface Props {
  style?: ViewStyle
}

const Footer: React.SFC<Props> = ({ children, style }) => {
  return <View style={[FooterStyles.container, style]}>{children}</View>
}

const FooterStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Footer
