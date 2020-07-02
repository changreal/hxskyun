import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Md5 } from 'ts-md5';
// 引入environemnts
import { environment } from "../../../environments/environment";
import { AjaxResult } from '../classes/ajax-result';
// 引入toast-service
import { ToastServiceProvider } from "./toast-service.service";
import { AngularDelegate } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ZrServicesService {

  private config: any = {
    // domain: 'http://a.itying.com/',  //接口公共部分（环境域名）
    domain: environment.server_url  //接口公共部分（环境域名）
  }
  httpOptions = { //http请求头
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })//请求头进行转格式，防止出现415错误
  };

  constructor(public http: HttpClient,
    ) { }

  // 登录
  login(info:object){
    let url = this.config.domain + '/Login/checkLogin' 
    return new Promise((resolve, reject) => {

      this.http.post(url, JSON.stringify(info),this.httpOptions).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 获取学期
  getSemester(){

    let url = this.config.domain + '/dictionary/List/courseSemeste'
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)

      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })

  }

  // 获取学校
  getSchool(){
    let url = this.config.domain + '/dictionary/List/schoolList'
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)

      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
    
  }

  // 获取学院
  getDepartment(){

    let url = this.config.domain + '/dictionary/List/departmentList'
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)

      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
    
  }


  // 根据学号/工号获取已加入的课程
  getCourseById(id){
    let url = this.config.domain + '/course/userId/' + id
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)

      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 根据课程id查看该课程的课程信息
  getCourseByCourseId(courseId){

    let url = this.config.domain + '/course/courseId/' + courseId

    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 查看某一门课程的成员信息
  getMembersByCourseId(courseId){
    
    let url = this.config.domain + '/course/members/' + courseId

    
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 查看某一门课程的某个成员的信息
  getMemberCourseExpInfo(info:object){
    
    let url = this.config.domain + '/course/courseSignByUserIdCourseId/' 
  
    return new Promise((resolve, reject) => {

      this.http.post(url, JSON.stringify(info),this.httpOptions).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 加入班课
  joinClass(info:object){
    let url = this.config.domain + '/course/joinCourse' 
    return new Promise((resolve, reject) => {

      this.http.post(url, JSON.stringify(info),this.httpOptions).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }
    // 退出班课
  exitClass(info:object){
    let url = this.config.domain + '/course/exitCourse' 
    return new Promise((resolve, reject) => {

      this.http.post(url, JSON.stringify(info),this.httpOptions).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }


  // 查看我创建的课程列表
    getCreatedCourseById(id){
      let url = this.config.domain + '/course/teacherId/' + id
      return new Promise((resolve, reject) => {
        
        this.http.get(url).subscribe((response: any) => {
          // 请求成功的回调函数
          resolve(response)
  
        }, (error:HttpErrorResponse) => {
          // 请求错误的回调函数
          console.log('service的错误：',error);
          reject(error);
          
        })
      })
    }

  // 创建班课服务
  postNewCourse(data){
    let url = this.config.domain + '/course/creatCourse'
    return new Promise((reslove, reject) => {
      this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
        reslove(response);
      }, (error:HttpErrorResponse) => {
        console.log('创建班课异常错误：', error);
        reject(error);
      })
    })

  }

  //修改班课信息
  postEidtCourseByCourseId(data){
    let url = this.config.domain + '/course/updateCourse/'
    console.log('发送修改班课信息：', data);
    return new Promise((reslove, reject) => {
      this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
        reslove(response);
      }, (error) => {
        reject(error);
      })
    })
  }


  /**
   * 签到相关
   */

  //  获取某门课程的历史签到列表
  getSignByCourseId(courseId){
    let url = this.config.domain + '/course/courseSignByCourseId/' + courseId
  
    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 某次历史签到结果详细信息
  getSignDetailBySignId(signId){
    let url = this.config.domain + '/signDeital/' + signId
  
    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  }

  // 获取当前签到的信息
  getCurrentSignBySignId(signId){
    let url = this.config.domain + '/currentSign/' + signId
  
    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((response: any) => {
        // 请求成功的回调函数
        resolve(response)
      }, (error:HttpErrorResponse) => {
        // 请求错误的回调函数
        console.log('service的错误：',error);
        reject(error);
        
      })
    })
  
  }

  // 开始签到
  startSignIn(courseId, longitude, latitude, duration ){
    let url = this.config.domain + '/startSignIn/'
    let data = {
      'longitude' : longitude,
      'latitude' : latitude,
      'duration' : duration
    }

    return new Promise((reslove, reject) => {
      this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => {
        reslove(response);
      }, (error:HttpErrorResponse) => {
        console.log('发起签到异常错误：', error);
        reject(error);
      })
    })

  }

  // 放弃签到
  cancelSignIn(signId){
    let url = this.config.domain + '/cancelSignIn/' + signId

    return new Promise((reslove, reject) => {
      this.http.post(url, this.httpOptions).subscribe((response) => {
        reslove(response);
      }, (error:HttpErrorResponse) => {
        console.log('放弃签到异常错误：', error);
        reject(error);
      })
    })

  }

  // 结束签到
  endSignIN(signId){

    let url = this.config.domain + '/endSignIn/' + signId

    return new Promise((reslove, reject) => {
      this.http.post(url, this.httpOptions).subscribe((response) => {
        reslove(response);
      }, (error:HttpErrorResponse) => {
        console.log('结束签到异常错误：', error);
        reject(error);
      })
    })
    
  }





}
