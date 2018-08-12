import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle } from 'react-native'

interface Props {
  image: any
  size: number
  style?: ViewStyle
}

const Avatar: React.SFC<Props> = ({ image, size, style }) => {
  const avatarStyle = StyleSheet.create({
    container: {
      borderRadius: size / 2,
      width: size,
      height: size,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  })

  return (
    <View style={[avatarStyle.container, style]}>
      <Image source={image} style={avatarStyle.image} />
    </View>
  )
}

export default Avatar
