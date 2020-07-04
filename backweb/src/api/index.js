import request from '../utils/request'
import dicManage from './DicManage'
import userManage from './UserManage'
import roleManage from './RoleManage'
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
  userManage,
  roleManage,
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

