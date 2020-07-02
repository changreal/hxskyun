import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage implements OnInit {

  semesters:any[]=[ //学期
    {id:'1', name:'2019-2020-1'},
    {id:'2', name:'2019-2020-2'},
    {id:'3', name:'2020-2021-1'},
    {id:'4', name:'2020-2021-2'},
    {id:'5', name:'2021-2022-1'},
  ]
  courseName=''
  courseSchool=''            //学校
  courseSemester='2019-2020-2'        //学期
  courseMajor=''             //专业（班级）
  courseCourseName=''         //课程名
  courseDes=''          //学习要求
  courseDepartment=''        //学校院系
  courseTeacherName=''
  courseStatus = ''

  courseId = ''
  userId = ''
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    private router: Router) { }

  ngOnInit() {
    // 传入课程编号，从而编辑该门课程
    this.activatedRoute.queryParams.subscribe((result:any) => {
      console.log(result);
      this.courseId = result.courseId;
      this.courseName = result.courseName
    });
    this.getCourseInfo()
  }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((result:any) => {
      this.courseId = result.courseId;
    });
    //这两个方法在将要进入界面的时候会触发,相当于是局部刷新,整个页面不会跟着刷新
      this.getCourseInfo();   
  }

  // 查询班课信息
  getCourseInfo(){
    // 根据id获取该班课的信息
    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      console.log(result);
      
      if(result.code == '200'){
        this.courseName = result.data.courseName
        this.courseSchool = result.data.school
        this.courseSemester = result.data.courseSemester
        this.courseMajor = result.data.major
        this.courseDepartment = result.data.department
        this.courseDes = result.data.classDes
        this.courseTeacherName = result.data.teacherName
        this.courseStatus = result.data.endClassStatus
      }
    }).catch((error) => {
      console.log('查找班课信息失败', error);
    })
  }

  // 结束班课
  doSubmit(){
    // 结束班课相关接口


    let theCourseInfo:any = {} // 新建课程信息
    
    theCourseInfo['teachId'] = this.localStorageService.getStore('uid','2')
    theCourseInfo['courseId'] = this.courseId
    theCourseInfo['courseSemester'] = this.courseSemester
    theCourseInfo['major'] = this.courseMajor
    theCourseInfo['courseName'] = this.courseName
    theCourseInfo['classDes'] = this.courseDes
    theCourseInfo['school'] = this.courseSchool
    theCourseInfo['department'] = this.courseDepartment
    theCourseInfo['endClassStatus'] = '已结课'
    
    // 提交到service更新
    this.zrServices.postEidtCourseByCourseId(theCourseInfo).then(async(result:any) => {
      console.log('课程的返回信息', result);
      
      // 请求返回状态
      if(result.code == '200'){
        // 跳出提示框提示修改成功！
        let url = '/tabs/create-classes'
        // let url = '/tabs/create-classes/class-detail'
        let params = {
          courseId : this.courseId
        }
        // this.toastService.presentAlertConfirm('修改班课成功！', url, params)  //回调函数跳转
        this.toastService.presentAlertConfirm('结束'+this.courseName+'课程！', url)  //回调函数跳转
      }else{
        console.log(result.msg);
      }
      
    }).catch((error) => {
      console.log('结束课程失败', error);
      
    })

  }

}
