import { Dispatch } from 'react'
import { ActionUser, ActionCheckbox } from './action'
import { ActionType } from './actionTypes'
import {User, Checkbox} from '../../types'

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




