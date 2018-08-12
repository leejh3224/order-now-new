import * as React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { Caption } from 'components/base/Fonts'

import { colors } from 'config/theme'

interface buttonConfig {
  title: string
  backgroundColor?: string
  color?: string
  onPress: () => void
}

interface Props {
  config: buttonConfig[]
}

const ButtonGroup: React.SFC<Props> = ({ config: [button1, button2] }) => {
  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    buttonBase: {
      borderRadius: 10,
      padding: 12,
      justifyContent: 'center',
      minWidth: 100,
      alignItems: 'center',
    },
    footerButton1: {
      backgroundColor: colors[button1.backgroundColor || 'floralWhite'],
      marginRight: 16,
    },
    footerButton2: {
      backgroundColor: colors[button2.backgroundColor || 'secondary'],
    },
    footerButtonText1: {
      color: colors[button1.color || 'secondary'],
    },
    footerButtonText2: {
      color: colors[button2.color || 'floralWhite'],
    },
  })

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={button1.onPress}
        style={[style.buttonBase, style.footerButton1]}
      >
        <Caption style={style.footerButtonText1}>{button1.title}</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={button2.onPress}
        style={[style.buttonBase, style.footerButton2]}
      >
        <Caption style={style.footerButtonText2}>{button2.title}</Caption>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonGroup
