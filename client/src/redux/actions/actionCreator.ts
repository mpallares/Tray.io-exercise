import { Dispatch } from 'react'
import { Action } from './action'
import { ActionType } from './actionTypes'
import {User} from '../../types'

export const createUser = (user: User) => {
  return (dispatch: Dispatch<Action>) =>
    dispatch({
      type: ActionType.CREATE__USER,
      payload: user,
    })
}


