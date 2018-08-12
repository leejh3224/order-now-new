import * as React from 'react'
import { FlatList, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

import { getStoreMenus, getSelectedStore } from 'store/selectors'
import { RootState } from 'store/rootReducer'
import { selectMenu } from 'store/app/actions'
import { IMenu, IStore } from 'store/types'
import { ActionType } from 'typesafe-actions'
import mapToArray from 'utils/mapToArray'

import { ItemTitle } from 'components/base/Fonts'
import MenuListItem from 'components/list/MenuListItem'

interface Props {
  store: IStore
  menus: IMenu[]
  selectMenu: (menuId: string) => ActionType<typeof selectMenu>
}

class MenuList extends React.Component<NavigationScreenProps & Props> {
  keyExtractor = (item: any) => item._id

  onPressListItem = (item: any) => {
    const { navigation, store, selectMenu } = this.props

    selectMenu(item._id)
    navigation.navigate('menuDetail', {
      storeName: store.name,
    })
  }

  renderListItem = ({ item }: any) => {
    return (
      <MenuListItem item={item} onPress={() => this.onPressListItem(item)} />
    )
  }

  style = StyleSheet.create({
    container: {
      margin: 4,
    },
  })

  render() {
    const { menus } = this.props

    return (
      <ScrollView>
        {menus && menus.length ? (
          <FlatList
            data={mapToArray(menus)}
            renderItem={this.renderListItem}
            keyExtractor={this.keyExtractor}
            numColumns={2}
            style={this.style.container}
          />
        ) : (
          <ItemTitle>메뉴가 준비되지 않았습니다.</ItemTitle>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  menus: getStoreMenus(state),
  store: getSelectedStore(state),
})

export default connect(
  mapStateToProps,
  { selectMenu },
)(withNavigation(MenuList as any) as any)
