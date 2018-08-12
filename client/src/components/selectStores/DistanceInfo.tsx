import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { ItemDesc } from 'components/base/Fonts'

import { colors } from 'config/theme'

const DistanceInfo = () => (
  <View style={style.container}>
    <ItemDesc>현재 위치에서 1km 내 매장만 표시됩니다.</ItemDesc>
  </View>
)

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.lighterGrey,
    paddingVertical: 12,
    alignItems: 'center',
  },
})

export default DistanceInfo
