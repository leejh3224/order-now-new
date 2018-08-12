import * as React from 'react'
import { View } from 'react-native'

import { ItemTitle } from 'components/base/Fonts'

import style from 'components/menuDetail/style'
import formatPrice from 'utils/formatPrice'

interface Props {
  price: number
}

const PriceRow: React.SFC<Props> = ({ price }) => (
  <View style={style.container}>
    <ItemTitle style={style.secondaryColor}>가격</ItemTitle>
    <ItemTitle style={style.secondaryColor}>{formatPrice(price)}</ItemTitle>
  </View>
)

export default PriceRow
