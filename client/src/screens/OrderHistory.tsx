import * as React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

import ScreenTemplate from 'screens/ScreenTemplate'

import ListRow from 'components/base/ListRow'
import { ItemTitle } from 'components/base/Fonts'
import Divider from 'components/base/ListDivider'
import ButtonGroup from 'components/base/ButtonGroup'
import VerticalSteps from 'components/orderHistory/VerticalSteps'

import { colors } from 'config/theme'
import formatPrice from 'utils/formatPrice'

const data = [
  {
    key: '1',
    texts: ['커피세포', '서울특별시 동대문구 이문로 50 그린타워'],
  },
  {
    key: '2',
    texts: ['포장옵션', '전체 포장(음료는 캐리어에)'],
  },
  {
    key: '3',
    texts: ['수제오렌지 셔벗', '5500원', 'Regular / 일회용컵'],
  },
]

const OrderHistory: React.SFC<NavigationScreenProps> = ({ navigation }) => {
  const buttonGroupConfig = [
    {
      title: '나만의 메뉴 등록',
      onPress: () => null,
    },
    {
      title: '새로 주문하기',
      onPress: () => navigation.navigate('selectStore'),
    },
  ]

  return (
    <ScreenTemplate footerContent={<ButtonGroup config={buttonGroupConfig} />}>
      <View style={style.statusContainer}>
        <VerticalSteps />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListRow>
            {{
              left: item.texts,
            }}
          </ListRow>
        )}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={
          <React.Fragment>
            <Divider />
            <View style={style.priceContainer}>
              <ItemTitle style={style.header}>{formatPrice(5500)}</ItemTitle>
            </View>
          </React.Fragment>
        }
      />
    </ScreenTemplate>
  )
}

const style = StyleSheet.create({
  statusContainer: {
    backgroundColor: colors.beige,
    padding: 12,
    paddingVertical: 20,
    height: 180,
  },
  header: {
    color: colors.secondary,
  },
  priceContainer: {
    padding: 12,
    alignItems: 'flex-end',
  },
})

export default withNavigation(OrderHistory as any)
