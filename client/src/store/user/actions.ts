import { LOAD_USER } from 'store/actionTypes'
import { action } from 'typesafe-actions'

export const loadUser = () => action(LOAD_USER)
