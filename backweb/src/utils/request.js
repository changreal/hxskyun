import axios from 'axios'
import qs from 'qs'

const service= axios.create({
  baseURL: 'http://175.24.16.48:8082', // api 的 base_url
  timeout: 5000, // request timeout  设置请求超时时间
  // responseType: "json",
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json"
  }
})

service.interceptors.request.use(
  config =>{
    if(localStorage.getItem('token')==null){
      window.location.href='/#/login';
    }
    let date=new Date();
    let nowDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    if(nowDate===localStorage.getItem('tokenTimeoutDate')){
      alert('用户身份已过期，请重新登入')
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTimeoutDate');
    }
    console.log(config.url);
    if(config.url=='/Login'){
      return config;
    }else {
      config.headers.token=localStorage.getItem('token');
    }
    return config
  },
  error=>{
    return Promise.reject(error);
  })

service.interceptors.response.use(
  response=>{
    if(response.data.code==='-2'){
      alert('用户信息有误')
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href='/#/login';
    }
    return response;
  },
  error => {
    return promise.reject(error);
  }
)

export default service;
