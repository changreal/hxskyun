import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { ToastController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';



@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage extends BaseUI implements OnInit {
   // 临时变量
   userId:any = '123123123'
  courseId:string
  hasThisClass:boolean = false
  // 班课信息
  courseMajor:string;
  courseName:string
  courseDepartment:string
  courseSchool:string
  courseTeacherName:string

  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,private toastController: ToastController,private router:Router) {
    super()

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      this.courseId = result.courseId
      
    })

    this.loadCourseInfo()
    
  }

  loadCourseInfo(){

    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      console.log('here:', result.data);
      if(result.success){
        this.hasThisClass = true
        this.courseName = result.data.courseName
        this.courseMajor = result.data.major
        this.courseSchool = result.data.school
        this.courseTeacherName = result.data.teacherName
        this.courseDepartment = result.data.department
      }
    
    }).catch((error) => {
      console.log('获取课程信息失败', error)
    })
    
    
  }
  exitClass(){
    console.log('exitclass work')
    let params:object = {
      "courseId" : this.courseId,
      "studentId" : this.userId
    }
    this.zrServices.exitClass(params).then((result:any) => {
      console.log('resulet'+result.code)
     if(result.code=='200'){
        super.showToast(this.toastController,'退出班课成功')
        this.router.navigateByUrl('/tabs/join-classes') 
        console.log(result.code)
        console.log('exit msg'+result.msg)
    }
    }).catch((error) => {
      super.showToast(this.toastController,'退出班课失败')
    })

  }

}
