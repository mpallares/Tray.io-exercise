import {User} from '../../types'
import {ActionType} from './actionTypes'

interface CreateUser {
  type: ActionType.CREATE__USER,
  payload: User
}

export type Action = CreateUser
