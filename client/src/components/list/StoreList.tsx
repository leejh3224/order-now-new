import * as React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { ActionType } from 'typesafe-actions'

import { IStore } from 'store/types'
import { selectStore } from 'store/app/actions'
import mapToArray from 'utils/mapToArray'

import ListDivider from 'components/base/ListDivider'
import StoreListItem from 'components/list/StoreListItem'

interface Props {
  stores: IStore[]
  selectStore: (storeId: string) => ActionType<typeof selectStore>
}

class StoreList extends React.Component<NavigationScreenProps & Props> {
  onPressListItem = (item: any) => {
    const { navigation, selectStore } = this.props

    selectStore(item._id)
    navigation.navigate('selectMenu', {
      title: '메뉴 선택',
      storeName: item.name,
    })
  }

  renderListItem = ({ item }: any) => {
    return (
      <StoreListItem item={item} onPress={() => this.onPressListItem(item)} />
    )
  }

  keyExtractor = (item: any) => item._id

  render() {
    const { stores } = this.props

    if (!stores) return null

    return (
      <ScrollView>
        <FlatList
          data={mapToArray(stores)}
          renderItem={this.renderListItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={ListDivider}
        />
      </ScrollView>
    )
  }
}

export default connect(
  null,
  { selectStore },
)(withNavigation(StoreList as any)) as any
