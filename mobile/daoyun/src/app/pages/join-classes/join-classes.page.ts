import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZrServicesService } from "../../shared/services/zr-services.service";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { EventService } from 'src/app/shared/services/event.service';
import { ToastServiceProvider } from "../../shared/services/toast-service.service";
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';

@Component({
  selector: 'app-join-classes',
  templateUrl: './join-classes.page.html',
  styleUrls: ['./join-classes.page.scss'],
})
export class JoinClassesPage extends BaseUI implements OnInit {


  userId:any = ''

  courseId:any
  role:any  // 身份
  reload:false


  courses:any[];
  courses_length = 0


  constructor(private zrServices: ZrServicesService,
    public router:Router,
    private barcodeScanner: BarcodeScanner,
    private localStorageService: MylocalstorageService,
    public eventService:EventService,
    public toastService:ToastServiceProvider,
    public loadingController: LoadingController
    ) { 
      super()
    }
    

  ngOnInit() {
    // this.userId=this.localStorageService.get('uid','')
    // this.loadCourseData()
    
  }
  ionViewWillEnter() {
    this.userId=this.localStorageService.get('uid','')
    this.loadCourseData(null)
    this.eventService.event.on('classupdate', () => {
      this.loadCourseData(null);
    })
  }


  loadCourseData(event){
    this.zrServices.getCourseById(this.userId).then((result:any) => {
      // console.log('根据用户号，获取该用户已加入的课程列表', result);
      if (result.code =='200') {
        this.courses = result.data
        this.courses_length = this.courses.length
      }else{
        this.toastService.errorToast(result.msg)
      }
    }).catch(async (error)=>{
      this.toastService.errorToast('请求课程列表出现错误：')
    }).finally(() => {
      if (event != null) { //如果不是第一次调用，则需要通知refresher控件结束工作
        event.target.complete();
      }
    })
    
  }


  brscanner(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.courseId=barcodeData['text']
      // console.log(this.courseId)
      // alert(JSON.stringify(barcodeData));
      this.router.navigate(['/tabs/join-classes/join'], {queryParams: {cId: this.courseId
      }});
   }).catch(err => {
       this.toastService.errorAlert(err)
   });
    
  }
  
    
}
