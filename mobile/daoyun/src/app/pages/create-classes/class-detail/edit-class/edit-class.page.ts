import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.page.html',
  styleUrls: ['./edit-class.page.scss'],
})
export class EditClassPage implements OnInit {

  submited:boolean = false
  semesters:any[]=[ //学期
    {id:'1', name:'2019-2020-1'},
    {id:'2', name:'2019-2020-2'},
    {id:'3', name:'2020-2021-1'},
    {id:'4', name:'2020-2021-2'},
    {id:'5', name:'2021-2022-1'},
  ]

  course_name=''
  course_school=''            //学校
  course_semester='2019-2020-1'        //学期
  course_major=''             //专业（班级）
  course_courseName=''         //课程名
  course_des=''          //学习要求
  course_department=''        //学校院系
  course_teacherName=''

  courseId = ''
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    private router: Router) { }

  ngOnInit() {

    // 传入课程编号，从而编辑该门课程
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log(result);
      this.courseId = result.courseId;
    });
    this.getCourseInfo()
  }
  
  // 查询班课信息
  getCourseInfo(){
    // 根据id获取该班课的信息
    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      console.log(result);
      
      if(result.code == '200'){
        this.course_name = result.data.courseName
        this.course_school = result.data.school
        this.course_semester = result.data.courseSemester
        this.course_major = result.data.major
        this.course_department = result.data.department
        this.course_des = result.data.classDes
        this.course_teacherName = result.data.teacherName
      }
    }).catch((error) => {
      console.log('查找班课信息失败', error);
    })
  }



  // 提交表单操作
  doSubmit(form:NgForm){
    this.submited = true //表单提交
    if(form.valid){
      this.onCourseSave()
    }
  }

  // 保存表单项
  onCourseSave(){
    let TeacherId = this.localStorageService.getStore('UserId', null)
    let theCourseInfo:any = {} // 新建课程信息
    
    theCourseInfo['courseName'] = this.course_name
    theCourseInfo['courseSemester'] = this.course_semester
    theCourseInfo['school'] = this.course_school
    theCourseInfo['department'] = this.course_department
    theCourseInfo['major'] = this.course_major
    theCourseInfo['courseDes'] = this.course_des
    
    // 提交到service更新
    this.zrServices.postEidtCourseByCourseId(this.courseId,theCourseInfo).then(async(result:any) => {
      console.log('添加课程的返回信息', result);
      
      // 请求返回状态
      if(result.code == '200'){
        // 跳出提示框提示修改成功！
        let url = '/create-classes/class-detail?courseId=' + this.courseId
        let params = this.courseId
        this.toastService.presentAlertConfirm('创建班课成功！', url, params)  //回调函数跳转
      }else{
        console.log(result.msg);
      }
      
    }).catch((error) => {
      console.log('新建课程失败', error);
      
    })
    
  }
  

}
