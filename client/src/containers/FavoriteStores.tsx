import * as React from 'react'

import FavoriteStoresScreen from 'screens/FavoriteStores'

class FavoriteStores extends React.Component {
  static navigationOptions = {
    title: '즐겨찾기',
  }

  render() {
    return <FavoriteStoresScreen />
  }
}

export default FavoriteStores
