import * as React from 'react'

import MapViewScreen from 'screens/MapView'

class MapView extends React.Component {
  static navigationOptions = {
    title: '지도',
  }

  render() {
    return <MapViewScreen />
  }
}

export default MapView
