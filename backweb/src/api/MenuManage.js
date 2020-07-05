import request from '../utils/request'
export default {
  selectMenuAuth(menuId){
    return request({
      url:'/Role/selectRight/'+menuId,
      method:'get',
    })
  },
  editMenuAuth(menuId,useStatus,permissionName,permissionDes){
    return request({
      url:'/Role/updateRight',
      method:'post',
      data:{
        permissionId:menuId,
        useStatus:useStatus,
        permissionName:permissionName,
        permissionDescription:permissionDes,
      }
    })
  }
}
