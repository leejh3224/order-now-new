import {
  CALL_API,
  STORES_REQUEST,
  STORES_RECEIVE,
  STORES_ERROR,
} from 'store/actionTypes'
import { action } from 'typesafe-actions'
import schemas from 'store/api/schemas'

export interface Location {
  lat: number
  lon: number
}

export const loadStores = ({ lat, lon }: Location) =>
  action(CALL_API, {
    types: [STORES_REQUEST, STORES_RECEIVE, STORES_ERROR],
    endpoint: `/stores/nearby?lat=${lat}&lon=${lon}`,
    schema: schemas.STORE_ARRAY,
  })
