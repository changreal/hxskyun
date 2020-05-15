import axios from 'axios'
let http = axios.create({
  baseURL: 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=1448_21089_31590_31541_31464_31321_30823_31163&hisdata=%5B%7B%22time%22%3A1587091994%2C%22kw%22%3A%22meyd-402%20magnet%22%7D%5D&bs=vue%20axios%E9%85%8D%E7%BD%AE&csor=0',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
