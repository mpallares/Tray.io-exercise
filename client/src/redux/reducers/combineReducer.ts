import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import {checkboxReducer} from './checkboxReducer'

const reducers = combineReducers({
  user: userReducer,
  checkbox: checkboxReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
