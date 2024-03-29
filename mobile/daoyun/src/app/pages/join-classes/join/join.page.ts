import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { BaseUI } from 'src/app/common/baseui';
import { ToastController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { EventService } from 'src/app/shared/services/event.service';
import { LoadingController } from '@ionic/angular';

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
   informText:''
  // 班课信息
  courseMajor:string;
  courseName:string
  courseDepartment:string
  courseSchool:string
  courseTeacherName:string
  constructor(private activatedRoute: ActivatedRoute, private zrServices: ZrServicesService,public eventService:EventService,
    private toastController: ToastController,private router:Router, private localStorageService: MylocalstorageService,
    public loadingController: LoadingController
    ) {
    super()
    activatedRoute.queryParams.subscribe(queryParams => {
      this.courseId= queryParams.cId;
      // console.log('getcid'+this.courseId)
    });
   }

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',900)
    this.userId=this.localStorageService.get('uid','')
    this.loadCourseInfo()
  }
  ionViewDidLeave(){
    // console.log('joinclass leave')
    this.eventService.event.emit('classupdate');
  }
  loadCourseInfo(){

    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      console.log('here:', result);
      if(result.data){
        this.hasThisClass = true
        this.courseName = result.data.courseName
        this.courseMajor = result.data.major
        this.courseSchool = result.data.school
        this.courseTeacherName = result.data.teacherName
        this.courseDepartment = result.data.department
      }
      if(result.code !='200'){
        this.informText = result.msg
      }
    
    }).catch((error) => {
      console.log('获取课程信息失败', error)
      this.informText = error.message
    })
  }

  joinClass(){
    console.log('joinclass work')
    let params:object = {
      "courseId" : this.courseId,
      "studentId" : this.userId
    }
    super.showLoading( this.loadingController,'请等待',1200)
    this.zrServices.joinClass(params).then((result:any) => {
     if(result.code=='200'){
        super.showToast(this.toastController,'加入班课成功')
        location.replace('/tabs/join-classes')   // 这样实现页面刷新，并且无法返回当前页面路径

        // this.router.navigateByUrl('/tabs/join-classes') 
        // console.log(result.code)
        // console.log('课程data：',result.data);
        // console.log(result.msg)
    }else if(result.code=='400'){
        super.showToast(this.toastController,'已加入该班课')
    }
    }).catch((error) => {
      super.showToast(this.toastController,'加入班课失败')
    })
  }
}
