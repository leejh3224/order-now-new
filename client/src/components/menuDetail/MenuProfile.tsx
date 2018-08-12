import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import Avatar from 'components/base/Avatar'
import { ItemTitle } from 'components/base/Fonts'

import imageMap from 'config/imageMap'
import { colors } from 'config/theme'

interface Props {
  image: any
  name: string
  size?: number
}

const DEFAULT_SIZE = 180

const MenuProfile: React.SFC<Props> = ({
  image,
  name,
  size = DEFAULT_SIZE,
}) => {
  const style = StyleSheet.create({
    profile: {
      padding: (24 * size) / DEFAULT_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      marginBottom: (16 * size) / DEFAULT_SIZE,
    },
    name: {
      color: colors.secondary,
    },
  })

  return (
    <View style={style.profile}>
      <Avatar image={imageMap[image]} size={size} style={style.avatar} />
      <ItemTitle style={style.name}>{name}</ItemTitle>
    </View>
  )
}

export default MenuProfile
