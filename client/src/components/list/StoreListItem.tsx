import * as React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import ListRow from 'components/base/ListRow'

import { colors } from 'config/theme'
import { IStore } from 'store/types'

interface Props {
  item: IStore
  onPress: () => void
}

const printDistanceInMeters = (distance: number) => {
  return `${Math.floor(distance)}m`
}

const StoreListItem: React.SFC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListRow>
        {{
          left: [item.name, item.address],
          right: (
            <ItemTitle style={style.distance}>
              {printDistanceInMeters(item.distance)}
            </ItemTitle>
          ),
        }}
      </ListRow>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  distance: {
    color: colors.secondary,
  },
})

export default StoreListItem
