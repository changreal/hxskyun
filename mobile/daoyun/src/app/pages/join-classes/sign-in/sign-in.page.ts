import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";
import { AlertController } from '@ionic/angular';
import { ToastController,} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';

declare var BMap;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage extends BaseUI implements OnInit {

  // signId = ''
  hasSigned:boolean = false
  courseId = ''
  userId = ''
  myInfo:any[] = [];
  signCount:number 
  courseName:''
  // 位置
  coordinate:any = {
    latitude : '1',
    longitude : '1'
  }

  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    public alertController:AlertController,
    // public toastController:ToastController,
    private router: Router,
    public loadingController: LoadingController
    ) { 
      super()
    }

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',800)
    this.userId = this.localStorageService.getStore('uid','')
    this.activatedRoute.queryParams.subscribe((result) => {
      // console.log('传入的参数：', result);
      this.courseId = result.courseId;
      this.courseName = result.courseName
    })

    this.loadCurrentSignInfo()
  }

  // 查询该门课程的签到信息
  // 查询签到信息
  loadCurrentSignInfo(){
    // 获取当前签到信息
    let params:object = { 
      "courseId" : this.courseId, //1
      "studentId" : this.userId //123123123
    }
    this.zrServices.getMemberCourseExpInfo(params).then((result:any) => {
      
        this.signCount = result.data.length
        for(let r of result.data){
          let s = {
            signId : r.signId,
            endTime : r.endTime,
            signStatus : r.signStatus
          }
          this.myInfo.push(s) // 重构每次签到列表
        }      
      
      
    }).catch((error) => {
      this.toastService.errorToast('获取用户该课程的经验值失败')
    })


  }

  // 获取地址
  getLocation() {
    let geolocation = new BMap.Geolocation(); //新建地图对象
    
    return new Promise((reslove, reject) => {
      geolocation.getCurrentPosition(function (r) {
        // console.log(this.getStatus())
        if (this.getStatus() == 0) {
          // console.log('获取位置成功：', r.point.lat, r.point.lng);
          reslove(r.point);
        }
        else {
          // console.log('获取位置失败:', this.getStatus());
          reject(this.getStatus());
        }
      });
    })
  }

  doSignIn(){
    // 获取签到信息
    super.showLoading( this.loadingController,'请等待',1500)
    this.getLocation().then((result:any) => {
      
      this.coordinate.latitude = result.lat
      this.coordinate.longitude = result.lng

      this.doAttendSignIn()
      
    }).catch((error) => {
      this.toastService.errorToast('无法获取地理位置！')
    })
  }

  // 签到
  doAttendSignIn(){

    if(this.hasSigned){
      this.toastService.errorToast('已签到过！请勿重复签到！')
      return ;
    }

    let params = {
      courseId : this.courseId,
      studentId : this.userId,
      targetLatitude:this.coordinate.latitude,
      targetLongitude: this.coordinate.longitude
    }
    
    this.zrServices.attendSignIn(params).then((result:any) => {
      // console.log(result);

      if(result.code == '200'){
        
        // 重构数据
        // this.hasSigned = true  // 标志签到
        // this.signCount += 1
        // let s = {
        //   signId : result.data.signId,
        //   endTime : result.data.signTime,
        //   signStatus : result.data.signStatus
        // }
        // //  重构每次签到列表
        // this.myInfo.push(s)

        this.hasSigned = true  // 标志签到

        this.toastService.generalToast('签到成功！')
        this.myInfo.splice(0)
        this.loadCurrentSignInfo()
        // location.reload()

      }else if(result.code == '400'){
        this.toastService.errorToast(result.msg)
      }

    }).catch((error)=>{
      this.toastService.errorToast('签到失败！')
      console.log(error);
      
    })
  }
}
