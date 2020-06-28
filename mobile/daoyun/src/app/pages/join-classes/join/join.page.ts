import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { BaseUI } from 'src/app/common/baseui';
import { ToastController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage extends BaseUI implements OnInit  {
  courseId:any
  hasThisClass:boolean = false
   // 临时变量
   userId:any
  // 班课信息
  courseMajor:string;
  courseName:string
  courseDepartment:string
  courseSchool:string
  courseTeacherName:string
  constructor(private activatedRoute: ActivatedRoute, private zrServices: ZrServicesService,
    private toastController: ToastController,private router:Router, private localStorageService: MylocalstorageService
    ) {
    super()
    activatedRoute.queryParams.subscribe(queryParams => {
      this.courseId= queryParams.cId;
      console.log('getcid'+this.courseId)
    });
   }

  ngOnInit() {
    this.userId=this.localStorageService.get('uid','')
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
  joinClass(){
    console.log('joinclass work')
    let params:object = {
      "courseId" : this.courseId,
      "studentId" : this.userId
    }
    this.zrServices.joinClass(params).then((result:any) => {
     if(result.code=='200'){
        super.showToast(this.toastController,'加入班课成功')
        this.router.navigateByUrl('/tabs/join-classes') 
        console.log(result.code)
        console.log('课程data：',result.data);
        console.log(result.msg)
    }else if(result.code=='400'){
        super.showToast(this.toastController,'已加入该班课')
    }
    }).catch((error) => {
      super.showToast(this.toastController,'加入班课失败')
    })
  }
}
