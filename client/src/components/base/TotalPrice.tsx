import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import formatPrice from 'utils/formatPrice'
import { colors } from 'config/theme'

import { ItemDesc, HugeTitle } from 'components/base/Fonts'

interface Props {
  price?: number
  quantity?: number
  total?: number
}

const TotalPrice: React.SFC<Props> = ({ price, quantity, total }) => (
  <View style={style.totalPriceContainer}>
    <ItemDesc style={style.secondaryColor}>총 주문 금액</ItemDesc>
    <HugeTitle style={style.secondaryColor}>
      {formatPrice(price! * quantity! || total!)}
    </HugeTitle>
  </View>
)

const style = StyleSheet.create({
  totalPriceContainer: {
    backgroundColor: colors.beige,
    alignItems: 'center',
    paddingVertical: 36,
  },
  secondaryColor: {
    color: colors.secondary,
  },
})

export default TotalPrice
