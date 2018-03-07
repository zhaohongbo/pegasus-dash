import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DEL_TODO,
  LOGIN,
  LOGOUT,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case DEL_TODO:
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}

const initUserInfo = {
  login: false,
  username: ''
}

function userInfo(state = initUserInfo, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        login: true,
        username: action.userInfo.username
      })
    case LOGOUT:
      return Object.assign({}, state, {
        login: false,
        username: ''
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  userInfo,
  todos
})

export default todoApp