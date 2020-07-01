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

  courseId = '1'
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
        this.courseName = result.data.courseName
        this.courseSchool = result.data.school
        this.courseSemester = result.data.courseSemester
        this.courseMajor = result.data.major
        this.courseDepartment = result.data.department
        this.courseDes = result.data.classDes
        this.courseTeacherName = result.data.teacherName
      }
    }).catch((error) => {
      console.log('查找班课信息失败', error);
    })
  }

  // 结束班课
  doSubmit(){
    // 结束班课相关接口

  }

}
