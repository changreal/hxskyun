import request from '../utils/request'
export default {
  getUserAll(){
    return request({
      url:'/User/getAllUser',
      method:'get',
    })
  },
  getUserById(id){
    return request({
      url:'/User/selectUserById/'+id,
      method:'get',
    })
  },
  newUser(name,password,phone,email){
    return request({
      url:'/Login/register',
      method:'post',
      data:{phone:phone,
        password:password,
        name:name,
        email:email
      },
    })
  },
  editUser(userId,name,phone,email,roleId){
    return request({
      url:'/User/updateUser',
      method:'put',
      data:{
        userId:userId,
        name:name,
        phone:phone,
        email:email,
        roleId:roleId,
      },
    })
  },
  editUserRole(userId,roleId){
    return request({
      url:'/User/updateUser',
      method:'put',
      data:{userId:userId,roleId:roleId},
    })
  },
  deleteUser(userId){
    return request({
      url:'/User/deleteUser/'+userId,
      method:'post',
    })
  },
}
