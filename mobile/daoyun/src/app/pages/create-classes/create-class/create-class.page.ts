import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {

  submited:boolean = false
  semesters:any[]=[ //学期
    {id:'1', name:'2019-2020-1'},
    {id:'2', name:'2019-2020-2'},
    {id:'3', name:'2020-2021-1'},
    {id:'4', name:'2020-2021-2'},
    {id:'5', name:'2021-2022-1'},
  ]
  courseInfo:any = {
    school:'',            //学校
    semester:'',         //学期
    major:'',             //专业（班级）
    courseName:'',         //课程名
    courseDes:'',          //学习要求
    department:'',        //学校院系
    submited:false        //是否提交
  }
  // newCourseId = ''
  // newCourseName = ''

  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,
              private localStorageService: LocalStorageService,
              private toastService: ToastServiceProvider,
              private router: Router) { }

  ngOnInit() {

  }

  // 提交表单操作
  doSubmit(form:NgForm){
    this.courseInfo.submited = true //表单提交
    if(form.valid){
      // this.onCourseSave()
    }
  }

  // 保存表单项
  onCourseSave(){
    let TeacherId = this.localStorageService.getStore('UserId', null)
    let newCourseInfo:any = {} // 新建课程信息

    newCourseInfo['courseSemester'] = this.courseInfo.semester
    newCourseInfo['school'] = this.courseInfo.school
    newCourseInfo['department'] = this.courseInfo.department
    newCourseInfo['major'] = this.courseInfo.major
    newCourseInfo['courseName'] = this.courseInfo.courseName
    newCourseInfo['courseDes'] = this.courseInfo.courseDes
    newCourseInfo['TeacherId'] = TeacherId

    this.zrServices.postNewCourse(newCourseInfo).then(async(result:any) => {
      console.log('添加课程的返回信息', result);
      // this.newCourseId = result.ClassId
      // this.newCourseName = result.courseName
      let url = '/tabs/create-classes/qrcode'  // qrcode
      let queryParams = {
        courseId: result.ClassId,
        // courseName: result.courseName
      }
      
      // 请求返回状态
      if(result.code == '200'){
        let courseId = result.data.ClassId
        console.log('新创建的班课号为：', courseId);
        // 新建成功，则弹出提示框，并且回调单数为跳转到qrCode页
        this.toastService.presentAlertConfirm('创建班课成功！', url, queryParams)
      }else{
        console.log(result.msg);
      }
      
    }).catch((error) => {
      console.log('新建课程失败', error);
      
    })
    
  }






  



}
