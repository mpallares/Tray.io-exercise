import {User, Checkbox} from '../../types'
import {ActionType} from './actionTypes'

interface CreateUser {
  type: ActionType.CREATE__USER,
  payload: User
}

interface CreateCheckbox {
  type: ActionType.CREATE__CHECKBOX
  payload: Checkbox
}


export type ActionUser = CreateUser
export type ActionCheckbox = CreateCheckbox

