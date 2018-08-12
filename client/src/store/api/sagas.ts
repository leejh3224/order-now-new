import axios from 'axios'
import { normalize, Schema } from 'normalizr'
import { takeLatest, put, call } from 'redux-saga/effects'
import { CALL_API } from 'store/actionTypes'

const REQUEST_ROOT = 'http://localhost:3000/v1'

interface callApiParams {
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: object
  endpoint: string
  schema: Schema
}

const callApi = ({ method = 'get', body, endpoint, schema }: callApiParams) => {
  const requestUrl = REQUEST_ROOT + endpoint

  return axios({
    method,
    url: requestUrl,
    data: body,
  }).then(
    (response): Promise<void | any> => {
      if (response.status != 200) {
        return Promise.reject(response)
      }

      if (schema) {
        return Promise.resolve(normalize(response.data, schema))
      }

      return Promise.resolve(response.data)
    },
  )
}

function* callApiSaga({ payload }: any) {
  const {
    types: [requestType, successType, failureType],
    ...callApiParams
  } = payload

  try {
    yield put({ type: requestType })
    const response = yield call(callApi, callApiParams)
    yield put({ type: successType, payload: response })
  } catch (error) {
    yield put({ type: failureType, error: error.message || 'server error' })
  }
}

export default function*() {
  yield takeLatest(CALL_API, callApiSaga)
}
