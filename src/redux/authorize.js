import { store } from './index'
import { setAuth, setLogout } from './authorization'

export function auth(userInfo) {
  store.dispatch(setAuth(userInfo));
}

export function logout() {
  store.dispatch(setLogout());
}