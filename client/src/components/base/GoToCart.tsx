import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import { withNavigation, NavigationScreenProps } from 'react-navigation'

const GoToCart: React.SFC<NavigationScreenProps> = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('cart')}>
    <Ionicons name="ios-cart-outline" size={28} />
  </TouchableOpacity>
)

export default withNavigation(GoToCart as any)
