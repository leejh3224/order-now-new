import * as React from 'react'

import DistanceInfo from 'components/selectStores/DistanceInfo'
import StoreList from 'components/list/StoreList'
import ScreenTemplate from 'screens/ScreenTemplate'

import { IStore } from 'store/types'

interface Props {
  stores: IStore[]
}

const ClosestStores: React.SFC<Props> = ({ stores }) => (
  <ScreenTemplate>
    <DistanceInfo />
    <StoreList stores={stores} />
  </ScreenTemplate>
)

export default ClosestStores
