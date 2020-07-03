import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../shared/services/zr-services.service";
import { LocalStorageService } from "../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../shared/services/toast-service.service";
import { EventService } from 'src/app/shared/services/event.service';
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';


@Component({
  selector: 'app-create-classes',
  templateUrl: './create-classes.page.html',
  styleUrls: ['./create-classes.page.scss'],
})
export class CreateClassesPage extends BaseUI  implements OnInit {

  courses:any[] = []
  courses_length=0
  userId:string=''
  role:string=''


  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,
              private localStorageService: LocalStorageService,
              private toastService: ToastServiceProvider,
              private router:Router,
              public eventService:EventService,
              public loadingController: LoadingController
  ) { 
    super()
  }
          

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',300)

    this.role = this.localStorageService.getStore('roleId','2')
    this.userId = this.localStorageService.getStore('uid', null)

    console.log('当前身份是：', this.role);
    // console.log('当前用户id是：', this.userId);
    

    // 判断身份
    if(this.role == '2' || this.role=='1'){
      this.loadCourseData(null)
    }else{
      // 不是教师或者管理员身份的话没有此权限
      this.courses_length = 0
      this.toastService.presentAlert('您没有此权限！')
    }
    
  }

  ionViewWillEnter() {
  }

  

  loadCourseData(event){

    // this.userId = this.localStorageService.getStore('userId', null)
    // this.role = this.localStorageService.getStore('role','student')
    
    this.zrServices.getCreatedCourseById(this.userId).then((result:any) => {
      // console.log('根据用户号，获取该用户已加入的课程列表', result);
      if (result.code =='200') {
        this.courses = result.data
        this.courses_length = this.courses.length
      }else{
        this.toastService.errorToast(result.msg)
      }
    }).catch(async (error)=>{
      // console.log('请求教师创建的课程列表出现错误：', error);
      this.toastService.errorToast(error.message)
    }).finally(() => {
      if (event != null) { //如果不是第一次调用，则需要通知refresher控件结束工作
        event.target.complete();
      }
    })
  }

  // 加入班课触发事件
  doCreateCourse(){
    let url = "/create-classes/create-class"
    if(this.role == '1' || this.role == '2'){
      this.router.navigate([url]);
    }else{
      // 学生创建班课权限
      this.toastService.presentAlert('您没有此权限！')
    }

  }


}
