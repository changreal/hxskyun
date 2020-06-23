import request from '../utils/request'
export default {
  getDicTableAll(){
    return request({
      url:'/dictionary/allType',
      method:'get',
    })
  },
  getDicDetailAll(){
    return request({
      url:'/dictionary/allDetail',
      method:'get',
    })
  },
  getDicDetailById(id){
    return request({
      url:'/dictionary/detail/'+id,
      method:'get',
    })
  },
  insertDicTable(type,key){
    return request({
      url:'/dictionary/type',
      method:'post',
      data:{type:type,itemKey:key}
    })
  },
  insertDicDetail(itemKey,itemValue,isDefault,sortNum){
    let isDefaultToNum;
    if(isDefault=='是'){
      isDefaultToNum='1'
    }else {
      isDefaultToNum='0'
    }
    return request({
      url:'/dictionary/detail',
      method:'post',
      data:{
        itemKey:itemKey,
        itemValue:itemValue,
        isDefault:isDefaultToNum,
        sortNum:sortNum,
      }
    })
  },
  deleteDicDetail(id) {
    return request({
      url:'/dictionary/detail/'+id,
      method:'delete',
    })
  },
  deleteDicTable(id) {
    return request({
      url:'/dictionary/type/'+id,
      method:'delete',
    })
  },
  editDicTable(id,type,itemKey) {
    return request({
      url:'/dictionary/type/'+id,
      method:'put',
      data:{
        type:type,
        itemKey:itemKey,
      }
    })
  },
  editDicDetail(id,itemKey,itemValue,isDefault,sortNum){
    let isDefaultToNum;
    if(isDefault=='是'){
      isDefaultToNum='1'
    }else {
      isDefaultToNum='0'
    }
    return request({
      url:'/dictionary/detail/'+id,
      method:'put',
      data:{
        itemKey:itemKey,
        itemValue:itemValue,
        isDefault:isDefaultToNum,
        sortNum:sortNum,
      }
    })
  }
}
