import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import {checkboxReducer} from './checkboxReducer'
import {pageReducer} from'./pageReducer'

const reducers = combineReducers({
  user: userReducer,
  checkbox: checkboxReducer,
  page: pageReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
