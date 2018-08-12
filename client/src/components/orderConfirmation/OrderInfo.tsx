import * as React from 'react'
import { View } from 'react-native'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import ListRow from 'components/base/ListRow'

import style from 'components/orderConfirmation/style'

import formatPrice from 'utils/formatPrice'
import { sizeNames, cupNames } from 'utils/constants'

interface Props {
  overrideOptions: {
    size: number
    cup: number
  }
  name: string
  price: number
}

const OrderInfo: React.SFC<Props> = ({ overrideOptions, name, price }) => (
  <React.Fragment>
    <View style={style.headerContainer}>
      <ItemTitle style={style.header}>최종 주문 메뉴</ItemTitle>
    </View>
    <ListRow>
      {{
        left: [
          name,
          formatPrice(price),
          `${sizeNames[overrideOptions.size]} / ${
            cupNames[overrideOptions.cup]
          }`,
        ],
      }}
    </ListRow>
  </React.Fragment>
)

export default OrderInfo
