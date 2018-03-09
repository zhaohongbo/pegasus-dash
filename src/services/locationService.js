import request from './request';

export async function queryLocation() {
  return request('/get_geo_data', {
    method: 'GET'
  }).catch((e)=>{
    console.log("get geo data", e);
  });
}
