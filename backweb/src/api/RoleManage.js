import request from '../utils/request'
export default {
  getRoleAll(){
    return request({
      url:'/Role/getAllRole',
      method:'get'
    })
  },
  newRole(roleId,roleName,roleDescription){
    return request({
      url:'/Role/insertRole',
      method:'post',
      data:{
        roleId:roleId,
        roleName:roleName,
        roleDescription:roleDescription,
      }
    })
  },
  editRole(roleId,roleName,roleDescription,rightList){
    return request({
      url:'/Role/updateRole',
      method:'post',
      data:{
        roleId:roleId,
        roleName:roleName,
        roleDescription:roleDescription,
        rightList:rightList,
      }
    })
  },
  deleteRole(roleId){
    return request({
      url:'/Role/deleteRole/'+roleId,
      method:'post',
    })
  },
}
