import { setToken, clearToken } from './token'

export const LOGIN_STATUS = true
export const LOGOUT_STATUS = false

export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'
export const SET_AUTH = 'SET_AUTH'

const initUserInfo = {
  login: null,
  username: ''
}

export function setLogin(token, userInfo) {
  return { type: SET_LOGIN, token, userInfo }
}

export function setAuth(userInfo) {
  return { type: SET_AUTH, userInfo }
}

export function setLogout() {
  return { type: SET_LOGOUT }
}

export function authorization(state = initUserInfo, action) {
  switch (action.type) {
    case SET_LOGIN:
      setToken(action.token)
      return Object.assign({}, state, {
        login: LOGIN_STATUS,
        username: action.userInfo.nickname
      })
    case SET_AUTH:
      return Object.assign({}, state, {
        login: LOGIN_STATUS,
        username: action.userInfo.nickname
      })
    case SET_LOGOUT:
      clearToken()
      return Object.assign({}, state, {
        login: LOGOUT_STATUS,
        username: ''
      })
    default:
      return state
  }
}