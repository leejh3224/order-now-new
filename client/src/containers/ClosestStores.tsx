import * as React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import ClosestStoresScreen from 'screens/ClosestStores'

import { ActionType } from 'typesafe-actions'
import { IStore } from 'store/types'
import { loadStores, Location } from 'store/api/actions'
import { getStores } from 'store/selectors'
import { RootState } from 'store/rootReducer'

interface Props {
  stores: IStore[]
  loadStores: ({ lat, lon }: Location) => ActionType<typeof loadStores>
}

class ClosestStores extends React.Component<NavigationScreenProps & Props> {
  static navigationOptions = {
    title: '가까운 매장',
  }

  componentDidMount() {
    const { loadStores } = this.props

    loadStores({
      lat: 37.596195,
      lon: 127.052544,
    })
  }

  render() {
    const { stores } = this.props

    return <ClosestStoresScreen stores={stores} />
  }
}

const mapStateToProps = (state: RootState) => ({
  stores: getStores(state),
})

export default connect(
  mapStateToProps,
  { loadStores },
)(ClosestStores as any)
