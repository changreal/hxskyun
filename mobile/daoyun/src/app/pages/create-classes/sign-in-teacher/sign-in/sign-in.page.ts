import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";
// import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";
import { AlertController } from '@ionic/angular';
import { ToastController,} from '@ionic/angular';

import { NgForm } from '@angular/forms';
declare var BMap;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  // @ViewChild('startButton', {static:true}) startButton:any
  // @ViewChild('cancelButton', {static:true}) cancelButton:any
  // @ViewChild('finishButton', {static:true}) finishButton:any

  signId = ''
  courseId = ''
  userId = ''
  courseMembersCount=''
  signCount=0
  coordinate:any

  // flag
  isStart:boolean = false
  isEnd:boolean = false
  timer:any


  // 表单对象
  duration:number=3
  signInfo:any = {
    courseId:this.courseId,
    duration:3,
  }



  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    // private toastService: ToastServiceProvider,
    public alertController:AlertController,
    public toastController:ToastController,
    private router: Router,) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数：', result);
      this.courseId = result.courseId;
      this.courseMembersCount = result.courseMembersCount
    })

  }

  ionViewWillLeave(){
    if (this.timer) {
      console.log('clear timer');
      
      clearInterval(this.timer);
    } 
  }


  // 开始签到
  async doStartSignIn(){

    // 获取签到信息
    this.coordinate = this.getLocation()
    console.log(this.coordinate);

    // 提示框确认是否开始？
    const alert = await this.alertController.create({
      animated: true,
      header: '提示',
      message: '是否开始签到？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: ()=>{

            // 发送签到请求
            this.zrServices.startSignIn(this.courseId, this.coordinate.longitude, this.coordinate.latitude, this.duration).then((result:any) => {
              console.log(result);
              if(result.code == '200'){
        
                this.isStart = true // 是否开始签到
                this.signId = result.signId // 接受返回的signid

                // 刷新签到情况
                this.doRefresh()
        
              }
              
            }).catch((error) => {
              console.log('创建签到错误',error);
              this.isStart = true // 是否开始签到，放这里仅为调试，记得删除
            })
          }
        }
      ]
    });

    await alert.present();

  }

  // 刷新签到人数信息
  doRefresh(){

    this.timer = setInterval(()=>{
      this.loadCurrentSignInfo()
    },1000)

  }

  // 查询签到信息
  loadCurrentSignInfo(){
    // 获取当前签到信息
    this.zrServices.getCurrentSignBySignId(this.signId).then((result:any) => {
      if(result.code == '200'){

        // 更新签到人头
        this.signCount = result.data.signCount
        
        // 如果监听到后端签到计时结束
        if(result.data.signStatus == 'end'){
          this.isStart = false;
          this.isEnd = true

          // 结束timer
          if (this.timer) {
            clearInterval(this.timer);
          }

          // 提示
          this.presentToast('结束签到！')
          // 跳转回前一页
          this.onBack()
        }
      }

    }).catch((error) => {
      console.log('刷新签到情况错误');
      // 结束timer
      if (this.timer) {
        clearInterval(this.timer);
      }
    })
  }

  // 获取地址
  getLocation() {
  //   let geolocation = new BMap.Geolocation(); //新建地图对象
  //   return new Promise((reslove, reject) => {
  //     geolocation.getCurrentPosition(function (r) {
  //       console.log(this.getStatus())
  //       if (this.getStatus() == 0) {
  //         console.log('获取位置成功：', r.point.lat, r.point.lng);
  //         reslove(r);
  //       }
  //       else {
  //         console.log('获取位置失败:', this.getStatus());
  //         reject(this.getStatus());
  //       }
  //     });
  //   })
    let coordinate:any = {
      longitude:12,
      latitude:23
    }
    return coordinate
  }

  // 放弃签到
  async doCancelSignIn(){

    // 提示框确认是否放弃签到？
    const alert = await this.alertController.create({
      animated: true,
      header: '提示',
      message: '是否放弃签到？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: ()=>{

            // 发送取消签到请求
            this.zrServices.cancelSignIn(this.signId).then((result:any) => {

              if(result.code == '200'){
                // 放弃逻辑
                this.isStart = false
                // 跳转回前一页
                this.onBackTo('/tabs/create-classes/sign-in-teacher')
              }

            }).catch((error) => {
              console.log('放弃签到页错误');
              // 已经结束签到了，错误逻辑放这里
              
              // 然后跳转
              this.isStart = false;
              this.onBack()
            })

          }
        }
      ]
    });
    // *******提示框组件结束**********

    await alert.present();
    
  }

  // 结束签到
  async doEndSignIn(){

    // 提示框确认是否放弃签到？
    const alert = await this.alertController.create({
      animated: true,
      header: '提示',
      message: '是否结束签到？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: ()=>{
            // 发送结束签到请求
            this.zrServices.cancelSignIn(this.signId).then((result:any) => {

              if(result.code == '200'){
                // 结束逻辑
                this.isStart = false
                // 提示
                this.presentToast('结束签到成功！')
                // 跳转回前一页
                this.onBackTo('/tabs/create-classes/sign-in-teacher')
              }

            }).catch((error) => {
              console.log('结束签到页错误');
              // 已经结束过了， 那错误逻辑在这里
              // 然后跳转
              this.isStart = false;
              this.onBack()
            })
            
          }
        }
      ]
    });
    // *******提示框组件结束**********
    await alert.present();

  }

  // 跳转回签到页面
  onBackTo(url){
    this.router.navigate([url], {
      queryParams:{
        courseId : this.courseId,
        courseMembersCount : this.courseMembersCount
      }
    } )
  }

  // 跳出toast提示
  async presentToast(message:any) {
    let toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      animated: true,
      mode: 'ios',
      color:'success',
      buttons: ['关闭']
    });

    toast.present();//出发消息提示框
  }

  // 导航点击返回跳转
  onBack(){
    console.log('arrived here');
    
    if(this.isStart){
      // 开始了
      console.log('A type');
      
      this.doCancelSignIn()
    }else{
      // 还没开始
      console.log('B type');
      
      this.onBackTo('/tabs/create-classes/sign-in-teacher')
    }
  }


}
