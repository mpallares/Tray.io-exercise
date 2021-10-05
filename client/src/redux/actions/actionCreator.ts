import { Dispatch } from 'react'
import { ActionUser, ActionCheckbox, ActionPage} from './action'
import { ActionType } from './actionTypes'
import {User, Checkbox, Page} from '../../types'

export const createUser = (user: User) => {
  return (dispatch: Dispatch<ActionUser>) =>
    dispatch({
      type: ActionType.CREATE__USER,
      payload: user,
    })
}

export const createCheckBox = (checkbox: Checkbox) => {
  return (dispatch: Dispatch<ActionCheckbox>) =>
  dispatch({
    type: ActionType.CREATE__CHECKBOX,
    payload: checkbox,
  })
}
export const createPage = (page: Page) => {
  return (dispatch: Dispatch<ActionPage>) =>
  dispatch({
    type: ActionType.CREATE__PAGE,
    payload: page,
  })
}




