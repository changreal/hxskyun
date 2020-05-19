import { Component } from '@angular/core';
// 引入服务
import { CommonService } from "../shared/services/common.service";
import { Observable } from "rxjs";
// 引入表单


// 获取动态路由的值或者获取传入的参数
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public url:string = '/dictionary/detail/1'
  public dataList:any[] = []
  public peopleInfo:any = {
    type: '测试角色',
    itemKey: 'testrole'
  }
  
  constructor(public common:CommonService,
              public route:ActivatedRoute,public http:HttpClient) {

    // get传值方式获取参数
    this.route.queryParams.subscribe((data)=>{
      console.log( data);
      
    })

    // 动态路由方式获取参数
    this.route.url.subscribe((data)=>{
      console.log(data);
      
    })
  }

  /* promise获取异步数据（其他操作基于这个改造）  */
  getData(url:string){

    // url= 'http://a.itying.com/api/productlist'   //这个是成功的
    // url = '/dictionary/detail/1'

    this.common.ajaxGet(this.url)
    .then((response:any)=>{
      console.log(response);
      this.dataList = response.data
    })
    .catch((err:any)=>{
      console.log(err);
    })

  }

  /* promise 提交异步数据（其他操作基于这个改造）  */
  postData(url:string, json:Object){
    
    this.common.ajaxPost(url, json)
    .then((response:any)=>{
      console.log(response);
      this.dataList = response.data
    })
    .catch((err:any)=>{
      console.log(err);
    })

  }

  // 点击更新按钮触发事件
  doSubmit(){
    let url = '/dictionary/type'
    let result = this.postData(url, this.peopleInfo)
    
  }

  onLogin(){
    let url="https://imoocqa.gugujiankong.com/api/feeds/get"
    this.http.get(url).subscribe((re)=>{
      console.log(re);
    })
  }
}
