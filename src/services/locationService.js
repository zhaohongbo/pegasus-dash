import request from './request';

export async function queryCurrent() {
  return request('/api/currentUser');
}
