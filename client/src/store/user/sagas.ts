import { takeLatest, put } from 'redux-saga/effects'
import { LOAD_USER, SET_USER } from 'store/actionTypes'
import { Auth } from 'aws-amplify'

function* getUser() {
  const user = yield Auth.currentUserInfo()

  // delete personal information
  delete user.attributes.phone_number
  delete user.attributes.phone_number_verified

  if (user) {
    yield put({ type: SET_USER, payload: user })
  }
}

export default function*() {
  yield takeLatest(LOAD_USER, getUser)
}
