import request from '../utils/request'
import dicManage from './DicManage'
export default{
  login(username,password){
    return request({
      url:'/Login/checkLogin',
      method:'post',
      data: {phone:username,password:password}
    })
  },
  forgetPassword(username,password) {
    return request({
      url:'/Login/forgetPassword',
      method:'post',
      data:{username:username,password:password}
    })
  },
  dicManage,
  test(){
    return request({
      url:'/Login/hello',
      method: 'post',
    })

  }
}

// export function login(username,password){
//   return request({
//     url:'/Login/checkLogin',
//     method:'post',
//     params: {phone:username,password:password}
//   })
// }
// export function getDicDetailById(id){
//   return request({
//     url:'/dictionary/detail/'+id,
//     method:'get',
//   })
// }

