import { request } from './request';
import { login } from '../redux/authorize'
import { setToken } from './token'

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function loginService(params) {
  console.log("auth"+params)
  return request('/login', {
    method: 'POST',
    body: params,
  }).then((response)=> {
    setToken(response.token);
    login(response.userInfo);
  });
}