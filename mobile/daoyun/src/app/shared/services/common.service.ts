import { Injectable } from '@angular/core';
// 引入http,ErrorResponse
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// 引入rxjs
import { throwError, Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators'; // 添加
// 引入environemnts
import { environment } from "../../../environments/environment";
import { AjaxResult } from '../classes/ajax-result';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private config: any = {
    // domain: 'http://a.itying.com/',  //接口公共部分（环境域名）
    domain: environment.server_url  //接口公共部分（环境域名）
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, X-Access-Token,Contet-Length, Authorization, Accept, X-Request-With',
      'Access-Control-Allow-Origin': '*',
      }),
  }
  

  private CODEMESSAGE = {
    0: 'Unknown Error',
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  constructor(public http: HttpClient,) {
    
   }

  /** get请求promise异步 */
  ajaxGet(url: string, myparams?:any):Promise<AjaxResult> {
    
    var api=this.config.domain + url;  
    return new Promise((resolve, reject) => {
      
      this.http.get(api,{headers: this.httpOptions.headers} ).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(this.handleSuccess(response))

      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        reject(this.handleError(error));
        
      })
    })
  }
  
  /** jsonp post请求promise异步 */
  ajaxPost(url: String, json: Object):any {

    console.log(json);
    var api = this.config.domain + url;

    return new Promise((resolve, reject) => {
      this.http.post(api, json).subscribe((response: any) => {
        resolve(this.handleSuccess(response))
      }, (error) => {
        reject(this.handleError(error));
      })
    })
  }


  /** http请求成功 */
  handleSuccess(res:any):AjaxResult{
    // 请求成功结果可以进一步复杂逻辑、封装
    return { 
      code: res.code || '',
      data: res.data || {},
      msg: res.msg || '',
      success:true
    }
    
    
  }

  /** http错误处理 */
  handleError(error: HttpErrorResponse):AjaxResult{
    // 错误结果可以进一步复杂逻辑、封装返回
    // console.log(error);
    
    let errMsg = '未知错误!'
    if (error.error instanceof ErrorEvent) {
      // 客户端的错误
      errMsg = `Error:${error.error.message}`
    } else { 
      // 服务器端的错误
      errMsg = `Error Code:${error.status} , Message:${error.message}`

      switch(error.status){
        case 400: console.log('请求参数有误'); break;
        case 403: console.log('被禁止访问'); break;
        case 404: console.log('请检查路径是否正确'); break;
        case 500: console.log('服务器内部错误'); break;
        default: console.log('erroMessage:' + errMsg);
      }
    }
    
    // 或者返回错误信息
    return {
      code: error.status || '',
      msg: error.message || '',
      success: error.ok,
    }
  }




}
