import {useHistory} from 'react-router-dom'
import {useAppDispatch} from '../redux/hooks'
import { ActionType } from '../redux/actions/actionTypes'
import React from 'react'




export function useRedirect () {
  const history = useHistory()
  const dispatch = useAppDispatch()
  history.push('/')
  dispatch({type: ActionType.CREATE__PAGE, payload: 'users'})

}