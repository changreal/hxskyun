import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";
import { AlertController } from '@ionic/angular';
import { ToastController,} from '@ionic/angular';
declare var BMap;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  // signId = ''
  courseId = ''
  userId = ''
  myInfo:any[] = [];
  signCount:''

  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    public alertController:AlertController,
    // public toastController:ToastController,
    private router: Router,) { }

  ngOnInit() {
    this.userId = this.localStorageService.getStore('uid','')
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数：', result);
      this.courseId = result.courseId;
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
        console.log('查询该用户在该课程的信息为：',result.data);
        this.signCount = result.data.length
        for(let r of result.data){
          let s = {
            signId : r.signId,
            endTime : r.endTime,
            signStatus : r.signStatus
          }
          this.myInfo.push(s) // 重构每次签到列表
        }      
      
      console.log('查询该用户在该课程的信息为：',this.myInfo);
      
    }).catch((error) => {
      console.log('获取用户该课程的经验值失败')
    })


  }


  // 签到
  doSignIn(){
    let params = {
      courseId : this.courseId,
      studentId : this.userId,
      targetLatitude:'28.4576',
      targetLongitude:'117.95546388'
    }
    this.zrServices.attendSignIn(params).then((result:any) => {
      console.log(result);

      if(result.code == '200'){
        
        // 冲过数据
        for(let r of result.data){
          let s = {
            signId : r.signId,
            endTime : r.endTime,
            signStatus : r.signStatus
          }
          this.myInfo.push(s) // 重构每次签到列表
        }  
        this.toastService.generalToast('签到成功！')

      }else if(result.code == '400'){
        console.log(result.msg);
        this.toastService.errorToast(result.msg)
      }

    }).catch((errpr)=>{
      this.toastService.errorToast('签到失败！')
      console.log('签到失败！');
      
    })
  }
    // 获取地址
    qrscanner6(){
      let geolocation = new BMap.Geolocation(); //新建地图对象
      
      return new Promise((reslove, reject) => {
        geolocation.getCurrentPosition(function (r) {
          console.log(this.getStatus())
          if (this.getStatus() == '0') {
            console.log('获取位置成功：', r.point.lat, r.point.lng);
            alert('获取位置成功'+r.point.lat+r.point.lng)
            reslove(r);
          }
          else {
            console.log('获取位置失败:', this.getStatus());
            reject(this.getStatus());
            alert('获取位置失败'+this.getStatus())
          }
        },{enableHighAccuracy: true});
      })

    }
}
