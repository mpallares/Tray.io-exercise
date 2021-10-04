import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/combineReducer'
import thunk from 'redux-thunk'

const store = createStore(reducers,{}, composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
