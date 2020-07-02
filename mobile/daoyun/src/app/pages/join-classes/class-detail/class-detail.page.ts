import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { ToastController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { EventService } from 'src/app/shared/services/event.service';



@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage extends BaseUI implements OnInit {
   // 临时变量
  userId:any = ''

  courseId:string
  hasThisClass:boolean = false
  submited = false
  // 班课信息
  courseMajor:string;
  courseName:string
  courseDepartment:string
  courseSchool:string
  courseTeacherName:string

  constructor(private activatedRoute: ActivatedRoute,private localStorageService: MylocalstorageService,
              private zrServices: ZrServicesService,private toastController: ToastController,private router:Router,
              public eventService:EventService) {
    super()

  }

  ngOnInit() {
    // this.userId=this.localStorageService.get('uid','')
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      this.courseId = result.courseId
      
    })
  }
  ionViewDidLeave(){
    console.log('joinclass leave')
    this.eventService.event.emit('classupdate');
  }
  ionViewWillEnter() {
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
        location.replace('/tabs/join-classes')
        
        // this.router.navigateByUrl('/tabs/join-classes') 
        // console.log(result.code)
        // console.log('exit msg'+result.msg)
    }
    }).catch((error) => {
      super.showToast(this.toastController,'退出班课失败')
    })

  }
  
   onBack(){
    this.router.navigateByUrl("/join-classes/members", {
        queryParams: {
          courseId:this.courseId
      }

    })
  }

}
