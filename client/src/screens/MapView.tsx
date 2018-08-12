import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import { MapView } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import ScreenTemplate from 'screens/ScreenTemplate'

import { ItemDesc } from 'components/base/Fonts'

const MapViewScreen: React.SFC<any> = () => (
  <ScreenTemplate>
    <MapView
      style={{ height: 300 }}
      initialRegion={{
        latitude: 37.596195,
        longitude: 127.052544,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
    />
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        position: 'absolute',
        top: 25,
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 4,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      }}
    >
      <Ionicons
        name="ios-refresh"
        size={30}
        color="pink"
        style={{ marginRight: 10 }}
      />
      <ItemDesc>여기에서 재검색</ItemDesc>
    </TouchableOpacity>
  </ScreenTemplate>
)

export default MapViewScreen
