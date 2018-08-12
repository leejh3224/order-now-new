import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

import { Caption } from 'components/base/Fonts'

import { colors } from 'config/theme'

const AllMenusFooter: React.SFC<NavigationScreenProps> = ({ navigation }) => (
  <React.Fragment>
    <View style={style.captionContainer}>
      <Caption style={style.storeName}>
        {navigation.getParam('storeName')}{' '}
      </Caption>
      <Caption>주문가능 메뉴 표시 중입니다.</Caption>
    </View>
    <TouchableOpacity
      style={style.button}
      onPress={() => navigation.navigate('selectStore')}
    >
      <Caption style={style.storeName}>변경</Caption>
    </TouchableOpacity>
  </React.Fragment>
)

const style = StyleSheet.create({
  storeName: {
    color: colors.secondary,
    fontWeight: '600',
  },
  captionContainer: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 4,
  },
})

export default withNavigation(AllMenusFooter as any)
