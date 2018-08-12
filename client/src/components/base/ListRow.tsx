import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'

interface Props {
  children: {
    left: string[]
    right?: React.ReactNode
  }
}

const ListRow: React.SFC<Props> = ({ children: { left, right } }) => {
  return (
    <View style={style.container}>
      <View>
        {left.map((text: string, index: number) => {
          const isTitle = index === 0

          return isTitle ? (
            <ItemTitle key={text} style={style.textGap}>
              {text}
            </ItemTitle>
          ) : (
            <ItemDesc key={text} style={style.textGap}>
              {text}
            </ItemDesc>
          )
        })}
      </View>
      {right}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 8, // regarding text bottom margin
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textGap: {
    marginBottom: 4,
  },
})

export default ListRow
