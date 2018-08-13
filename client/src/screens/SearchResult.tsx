import * as React from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import ScreenTemplate from 'screens/ScreenTemplate'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import ListRow from 'components/base/ListRow'

import { selectStore } from 'store/app/actions'

import { colors } from 'config/theme'

const printDistanceInMeters = (distance: number) => {
  return `${Math.floor(distance)}m`
}

interface Props {
  selectStore: any
}

const SearchResult: React.SFC<NavigationScreenProps & Props> = ({
  navigation,
  selectStore,
}) => {
  const searchResultsExists =
    navigation.getParam('searchResults') &&
    navigation.getParam('searchResults').length

  return (
    <ScreenTemplate>
      <View style={style.keyword}>
        <ItemDesc style={style.text}>{`"${navigation.getParam(
          'keyword',
        )}"에 대한 검색 결과입니다.`}</ItemDesc>
      </View>
      <ScrollView centerContent={!searchResultsExists}>
        {searchResultsExists ? (
          navigation.getParam('searchResults').map((result: any) => (
            <TouchableOpacity
              key={result._id}
              onPress={() => {
                selectStore(result._id)
                navigation.navigate('selectMenu', {
                  title: '메뉴 선택',
                  storeName: result.name,
                })
              }}
            >
              <ListRow>
                {{
                  left: [result.name, result.address],
                  right: (
                    <ItemTitle style={style.distance}>
                      {printDistanceInMeters(result.distance)}
                    </ItemTitle>
                  ),
                }}
              </ListRow>
            </TouchableOpacity>
          ))
        ) : (
          <ItemTitle style={style.text}>
            검색결과가 존재하지 않습니다.
          </ItemTitle>
        )}
      </ScrollView>
    </ScreenTemplate>
  )
}

const style = StyleSheet.create({
  distance: {
    color: colors.secondary,
  },
  text: {
    textAlign: 'center',
    marginVertical: 8,
  },
  keyword: {
    backgroundColor: colors.lighterGrey,
  },
})

export default connect(
  null,
  { selectStore },
)(withNavigation(SearchResult as any))
