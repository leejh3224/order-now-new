import * as React from 'react'
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { ItemTitle, ItemDesc } from 'components/base/Fonts'

import imageMap from 'config/imageMap'
import { colors } from 'config/theme'
import { IMenu } from 'store/types'

interface Props {
  item: IMenu
  onPress: () => void
}

const MenuListItem: React.SFC<Props> = ({ item, onPress }) => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      margin: 4,
      alignItems: 'flex-start',
      paddingBottom: 8,
      borderRadius: 3,
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.5,
    },
    imageContainer: {
      width: '100%',
      height: 170,
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      width: '100%',
      padding: 8,
      alignItems: 'center',
    },
    title: {
      color: colors.secondary,
      marginBottom: 4,
    },
  })

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={style.imageContainer}>
        <Image source={imageMap[item.image!]} style={style.image} />
      </View>
      <View style={style.contentContainer}>
        <ItemTitle style={style.title}>{item.name}</ItemTitle>
        <ItemDesc>{item.price} 원</ItemDesc>
      </View>
    </TouchableOpacity>
  )
}

export default MenuListItem
