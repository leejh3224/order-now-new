import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from 'config/theme'

interface Props {
  theme?: string
}

const ListDivider: React.SFC<Props> = ({ theme = 'lightBorder' }) => {
  const style = StyleSheet.create({
    container: {
      height: 0.5,
      backgroundColor: colors[theme],
    },
  })

  return <View style={style.container} />
}

export default ListDivider
