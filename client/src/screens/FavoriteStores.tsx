import * as React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import ScreenTemplate from 'screens/ScreenTemplate'

import DistanceInfo from 'components/selectStores/DistanceInfo'
import ListRow from 'components/base/ListRow'

import { colors } from 'config/theme'

const FavoriteStores: React.SFC = () => {
  return (
    <ScreenTemplate>
      <View style={{ flex: 1 }}>
        <DistanceInfo />
        <ListRow>
          {{
            left: ['커피세포', '서울특별시 동대문구 이문로 50'],
            right: (
              <Ionicons name="ios-star" size={28} color={colors.secondary} />
            ),
          }}
        </ListRow>
      </View>
    </ScreenTemplate>
  )
}

export default FavoriteStores
