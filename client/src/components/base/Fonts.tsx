import * as React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

import { colors } from 'config/theme'

interface FontProps {
  style?: TextStyle
}

const ItemTitle: React.SFC<FontProps> = ({ children, style }) => (
  <Text style={[fontStyles.itemTitle, style]}>{children}</Text>
)

const ItemDesc: React.SFC<FontProps> = ({ children, style }) => (
  <Text style={[fontStyles.itemDesc, style]}>{children}</Text>
)

const Caption: React.SFC<FontProps> = ({ children, style }) => (
  <Text style={[fontStyles.caption, style]}>{children}</Text>
)

const HugeTitle: React.SFC<FontProps> = ({ children, style }) => (
  <Text style={[fontStyles.hugeTitle, style]}>{children}</Text>
)

const fontStyles = StyleSheet.create({
  itemTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.font,
  },
  itemDesc: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.font,
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.font,
  },
  hugeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.font,
  },
})

export { ItemTitle, ItemDesc, Caption, HugeTitle }
