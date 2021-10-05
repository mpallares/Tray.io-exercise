import {User, Checkbox, Page} from '../../types'
import {ActionType} from './actionTypes'

interface CreateUser {
  type: ActionType.CREATE__USER,
  payload: User
}

interface CreateCheckbox {
  type: ActionType.CREATE__CHECKBOX
  payload: Checkbox
}

interface CreatePage {
  type: ActionType.CREATE__PAGE,
  payload: Page
}


export type ActionUser = CreateUser
export type ActionCheckbox = CreateCheckbox
export type ActionPage = CreatePage

