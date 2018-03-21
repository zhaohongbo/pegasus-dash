import requestWithToken, { request } from './request';
// import { auth, logout } from '../redux/authorize'

export async function getUserInfo() {
  return requestWithToken('/get_user_info', {
    method: 'GET',
  });
}

export async function loginService(params) {
  return request('/login', {
    method: 'POST',
    body: params,
  });
}