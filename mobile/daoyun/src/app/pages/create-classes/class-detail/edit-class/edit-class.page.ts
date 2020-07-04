import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";
import { NgForm } from '@angular/forms';
import { BaseUI } from 'src/app/common/baseui';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.page.html',
  styleUrls: ['./edit-class.page.scss'],
})
export class EditClassPage extends BaseUI implements OnInit {

  submited:boolean = false
  semesters:any[]= []
  schools:any[] = []
  departments:any[] = []
  loadFinished:boolean = false;

  // semesters:any[]=[ //学期
  //   {id:'1', name:'2019-2020-1'},
  //   {id:'2', name:'2019-2020-2'},
  //   {id:'3', name:'2020-2021-1'},
  //   {id:'4', name:'2020-2021-2'},
  //   {id:'5', name:'2021-2022-1'},
  // ]

  // courseStatus:any[]=[ //学期
  //   {id:'1', name:'未开始'},
  //   {id:'2', name:'进行中'},
  //   {id:'3', name:'已结课'},
  // ]
  userId=''
  course_name=''
  course_school=''            //学校
  course_semester=''        //学期
  course_major=''             //专业（班级）
  course_courseName=''         //课程名
  course_des=''          //学习要求
  course_department=''        //学校院系
  course_teacherName=''
  course_status = ''

  courseId = ''
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    private router: Router,
    public loadingController: LoadingController
    ) { 
      super()

    }

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',1000)

    this.userId = this.localStorageService.getStore('uid', '2')
    // 传入课程编号，从而编辑该门课程
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log(result);
      this.courseId = result.courseId;
    });
    this.getCourseInfo()
    this.loadBasicInfo()
  }

  // 获取学期、学校、学院
  loadBasicInfo(){
    // 获取学期
    this.zrServices.getSemester().then((result:any) => {
      for(let r of result.data){
        let item = {
          id:r.dictId,
          name:r.itemValue
        }
        this.semesters.push(item)
      }
    })

    // 获取学校
    this.zrServices.getSchool().then((result:any) => {
      for(let r of result.data){
        let item = {
          id:r.dictId,
          name:r.itemValue
        }
        this.schools.push(item)
      }
    })
    // 获取学院
    this.zrServices.getDepartment().then((result:any) => {
      for(let r of result.data){
        let item = {
          id:r.dictId,
          name:r.itemValue
        }
        this.departments.push(item)
      }
    })

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
        this.course_status = result.data.endClassStatus

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
    let theCourseInfo:any = {} // 新建课程信息

    theCourseInfo = {
      'teachId' : this.userId,
      'courseId' : this.courseId,
      'courseSemester' : this.course_semester,
      'major' : this.course_major,
      'courseName' : this.course_name,
      'classDes' : this.course_des,
      'school' : this.course_school,
      'department' : this.course_department,
      'endClassStatus' : this.course_status
    }
    
    // theCourseInfo['teachId'] = this.userId
    // theCourseInfo['courseId'] = this.courseId
    // theCourseInfo['courseSemester'] = this.course_semester
    // theCourseInfo['major'] = this.course_major
    // theCourseInfo['courseName'] = this.course_name
    // theCourseInfo['classDes'] = this.course_des
    // theCourseInfo['school'] = this.course_school
    // theCourseInfo['department'] = this.course_department
    // theCourseInfo['endClassStatus'] = this.course_status


    super.showLoading( this.loadingController,'请等待',2000)
    
    // 提交到service更新
    this.zrServices.postEidtCourseByCourseId(theCourseInfo).then(async(result:any) => {
      console.log('添加课程的返回信息', result);
      
      // 请求返回状态
      if(result.code == '200'){
        // 跳出提示框提示修改成功！
        // let url = '/tabs/create-classes/class-detail?courseId=' + this.courseId
        let url = '/tabs/create-classes/class-detail'
        let params = {
          courseId : this.courseId,
          courseName:this.course_courseName
        }

        this.toastService.presentAlertConfirm('修改班课成功！', url, params)  //回调函数跳转
        // this.toastService.presentAlertConfirm('修改班课成功！', url)  //回调函数跳转
      }else{
        console.log(result.msg);
      }
      
    }).catch((error) => {
      console.log('修改课程失败', error);
      
    })
    
  }
  

}
