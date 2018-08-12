import * as React from 'react'
import { View, Button } from 'react-native'

import { ItemTitle } from 'components/base/Fonts'
import ListRow from 'components/base/ListRow'
import style from 'components/orderConfirmation/style'

import { colors } from 'config/theme'

interface Props {
  name: string
  address: string
  onPress: () => void
}

const StoreInfo: React.SFC<Props> = ({ name, address, onPress }) => (
  <React.Fragment>
    <View style={style.headerContainer}>
      <ItemTitle style={style.header}>주문 매장</ItemTitle>
    </View>
    <ListRow>
      {{
        left: [name, address],
        right: (
          <Button title="변경" onPress={onPress} color={colors.secondary} />
        ),
      }}
    </ListRow>
  </React.Fragment>
)

export default StoreInfo
