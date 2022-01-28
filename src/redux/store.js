import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers'

const reducer = combineReducers({appReducer});

export const Store = createStore(reducer, applyMiddleware(thunk))