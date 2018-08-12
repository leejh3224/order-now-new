import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ItemTitle } from 'components/base/Fonts'

import style from 'components/menuDetail/style'
import { colors } from 'config/theme'

interface Props {
  onPress: () => void
}

const OptionRow: React.SFC<Props> = ({ onPress }) => (
  <TouchableOpacity style={style.container} onPress={onPress}>
    <ItemTitle style={style.secondaryColor}>옵션</ItemTitle>
    <Ionicons name="ios-arrow-forward" size={28} color={colors.secondary} />
  </TouchableOpacity>
)

export default OptionRow
