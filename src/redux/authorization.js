export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'

const initUserInfo = {
  login: false,
  username: ''
}

export function setLogin(userInfo) {
  return { type: SET_LOGIN, userInfo }
}

export function setLogout() {
  return { type: SET_LOGOUT }
}

export function authorization(state = initUserInfo, action) {
  switch (action.type) {
    case SET_LOGIN:
      return Object.assign({}, state, {
        login: true,
        username: action.userInfo.username
      })
    case SET_LOGOUT:
      return Object.assign({}, state, {
        login: false,
        username: ''
      })
    default:
      return state
  }
}