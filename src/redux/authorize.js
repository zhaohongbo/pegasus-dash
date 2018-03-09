import { store } from './index'
import { setLogin, setLogout } from './authorization'

export function login(userInfo) {
  store.dispatch(setLogin(userInfo));
}

export function logout() {
  store.dispatch(setLogout());
}