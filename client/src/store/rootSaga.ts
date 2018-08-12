import { all } from 'redux-saga/effects'

import callApiSaga from 'store/api/sagas'
import userSaga from 'store/user/sagas'

const sagas = [callApiSaga(), userSaga()]

export default function*() {
  yield all(sagas)
}
