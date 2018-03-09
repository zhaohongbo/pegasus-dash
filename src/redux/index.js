import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { authorization } from './authorization'
import { visibilityFilter, todos } from './reducers' 

const rootReducer = combineReducers({
  userInfo: authorization,
  visibilityFilter,
  // userInfo,
  todos
})

export const store = createStore(rootReducer)