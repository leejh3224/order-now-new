import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { ItemTitle, ItemDesc, Caption } from 'components/base/Fonts'

import formatDate from 'utils/formatDate'
import { colors } from 'config/theme'

const OrderStatusModal: React.SFC<NavigationScreenProps> = ({ navigation }) => (
  <View style={style.background}>
    <View style={style.container}>
      <Image source={require('../../assets/store-round.png')} />
      <ItemTitle style={style.title}>
        {navigation.getParam('storeName') || '기본매장'}
      </ItemTitle>
      <ItemDesc style={style.description}>
        매장으로 주문을 요청하였습니다.
      </ItemDesc>
      <Caption>{formatDate(Date.now())}</Caption>
      <TouchableOpacity
        style={style.confirmButton}
        onPress={() => navigation.navigate('selectStore')}
      >
        <ItemDesc style={style.confirm}>확인</ItemDesc>
      </TouchableOpacity>
    </View>
  </View>
)

const style = StyleSheet.create({
  background: {
    backgroundColor: colors.lightBorder,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: 250,
    height: 400,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  title: {
    marginVertical: 24,
  },
  description: {
    marginBottom: 8,
    color: colors.secondary,
  },
  confirmButton: {
    borderRadius: 10,
    backgroundColor: colors.secondary,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 40,
  },
  confirm: {
    color: colors.white,
  },
})

export default OrderStatusModal
