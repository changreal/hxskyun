import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage:any = window.localStorage   // 引入localStorage
  constructor() { }

  // 获取localStorage的数据
  getStore(key:string, defaultValue:any):any {

    if (!key){
      return ;
    }
    let value:any = this.storage.getItem(key)
    
    try{
      value = JSON.parse(value)
    }catch(error){
      value = null
    }

    if(value === null && defaultValue ){
      value = defaultValue
    }
    return value
  }
  
  // 设置获取localStorage的数据数据
  setStore(key:string, value:any){

    if(!key){
      return ;
    }
    
    if(typeof value !== 'string'){
      value = JSON.stringify(value)
    }

    this.storage.setItem(key, value)
  }

  // 删除获取localStorage的数据数据
  removeStore(key: string) {
    if (!key) {
      return;
    }
    this.storage.removeItem(key);
  }
  
}
