import request from './request';

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function loginService(params) {
  console.log("auth"+params)
  return request('/login', {
    method: 'POST',
    body: params,
  });
}