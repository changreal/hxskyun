import request from '../utils/request'
export default {
  getClassAll(){
    return request({
      url:'/course/getAllCourse',
      method:'get',
    })
  },
  editClassById(data){
    return request({
      url:'course/updateCourse',
      method:'post',
      data:data,
    })
  }
}
