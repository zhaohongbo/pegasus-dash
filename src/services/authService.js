import requestWithToken, { request } from './request';
import { auth } from '../redux/authorize'

export async function getUserInfo() {
  return requestWithToken('/get_user_info', {
    method: 'GET',
  }).then((response) => {
    auth(response);
  }).catch((e) => {
    console.log("get user info", e.message);
  });
}

export async function loginService(params) {
  return request('/login', {
    method: 'POST',
    body: params,
  });
}