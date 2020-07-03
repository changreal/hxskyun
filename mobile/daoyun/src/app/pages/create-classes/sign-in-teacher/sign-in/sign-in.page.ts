import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";
// import { ToastServiceProvider } from "../../../../shared/services/toast-service.service";
import { AlertController } from '@ionic/angular';
import { ToastController,} from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';
import { LoadingController } from '@ionic/angular';

import { NgForm } from '@angular/forms';
declare var BMap;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage extends BaseUI implements OnInit {

  // @ViewChild('startButton', {static:true}) startButton:any
  // @ViewChild('cancelButton', {static:true}) cancelButton:any
  // @ViewChild('finishButton', {static:true}) finishButton:any
  // @ViewChild('signCountShow', {static:true}) signCountShow:any

  signId = ''
  courseId = ''
  courseName=''
  userId = ''
  course
  courseMembersCount=''
  signCount:string = ''
  coordinate:any = {
    latitude : '1',
    longitude : '1'
  }

  // flag
  isStart:boolean = false
  isEnd:boolean = false
  timer:any


  // 表单对象
  duration:number=3
  signInfo:any = {
    courseId:this.courseId,
  }



  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    // private toastService: ToastServiceProvider,
    public alertController:AlertController,
    public toastController:ToastController,
    private router: Router,
    public loadingController: LoadingController) { 
      super() 
  }

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',300)
    this.activatedRoute.queryParams.subscribe((result) => {
      // console.log('传入的参数：', result);
      this.courseId = result.courseId;
      this.courseName = result.courseName
      this.courseMembersCount = result.courseMembersCount
    })

  }

  ionViewWillLeave(){
    if (this.timer) {
      console.log('clear timer');
      clearInterval(this.timer);
    } 
  }


  // 获取地址
  getLocation() {
    let geolocation = new BMap.Geolocation(); //新建地图对象
    
    return new Promise((reslove, reject) => {
      geolocation.getCurrentPosition(function (r) {
        

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


  // 拆分了一下开始签到事件（获取地址）
  doSignIn(){

    // 获取签到信息
    this.getLocation().then((result:any) => {

      this.coordinate.latitude = result.lat
      this.coordinate.longitude = result.lng
      // console.log('新的coordinate内容为：', this.coordinate);
      
      this.doStartSignIn()
      
    }).catch((error) => {
      console.log('显示错误');
      
    })
  }

  // 开始签到交互
  async doStartSignIn(){

    // 提示框确认是否开始？
    const alert = await this.alertController.create({
      animated: true,
      header: '提示',
      message: '是否开始签到？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
        }, {
          text: '确认',
          handler: ()=>{

            // 发送签到请求
            this.zrServices.createSignIn(this.courseId, this.coordinate.longitude, this.coordinate.latitude, this.duration).then((result:any) => {
              // console.log(result);

              if(result.code == '200'){
        
                this.isStart = true // 是否开始签到
                this.signId = result.data.signId // 接受返回的signid

                
                // console.log('当前签到id为：', this.signId);
                this.localStorageService.setStore('signId', this.signId) //保存到缓存里
                this.presentToast('开始计时！','success')

                
                // 刷新签到情况
                this.doRefresh()
        
              }else{
              this.presentToast(result.msg,'danger')
              }
              
            }).catch((error) => {
              this.presentToast(error.message,'danger')
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
      console.log('自动刷新了');
    },5000)  // 每两秒查询一次

  }

  // 查询签到信息
  loadCurrentSignInfo(){
    // 获取当前签到信息
    this.zrServices.getCurrentSignBySignId(this.signId).then((result:any) => {
      // console.log('查询到签到信息为：', result);
      
      // 更新签到人头
      this.signCount = result.data[0].signedNumbers
      // this.signCountShow.nativeElement.value = result.data.signNumbers
      
      // 查询到已经是结束状态了
      if(result.data[0].endTimestamp < result.data[0].nowTimeStamp ){

        // console.log('时间超过计时时间！');
        
        // 结束
        this.isEnd = true
        this.isStart = false;

        // 结束timer
        if (this.timer) {
          clearInterval(this.timer);
        }

        // 提示
        this.presentToast('签到时间到，签到结束！')
        // 跳转回前一页
        this.onBackTo('/tabs/create-classes/sign-in-teacher')
      }

    }).catch((error) => {
      console.log('刷新签到情况错误');
    })
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
        }, {
          text: '确认',
          handler: ()=>{

            // 发送取消签到请求
            this.zrServices.cancelSignIn(this.signId).then((result:any) => {

              if(result.code == '200'){
                
                // 放弃逻辑
                this.isStart = false
                // 提示
                this.presentToast('放弃签到！','warning')
                // 跳转回前一页
                this.onBackTo('/tabs/create-classes/sign-in-teacher')
              }else{
              this.presentToast(result.msg,'danger')
              }

            }).catch((error) => {
              this.presentToast(error.message,'danger')
              
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
          
        }, {
          text: '确认',
          handler: ()=>{
            // 发送结束签到请求
            this.zrServices.endSignIn(this.signId).then((result:any) => {

              if(result.code == '200'){
                // 结束逻辑
                this.isEnd = true
                this.isStart = false
                // 提示
                this.presentToast('结束签到成功！')
                // 跳转回前一页
                this.onBackTo('/tabs/create-classes/sign-in-teacher')
              }else{
              this.presentToast(result.msg,'danger')
              }

            }).catch((error) => {
              // console.log('结束签到页错误');
              this.presentToast(error.message,'danger')
              // 已经结束过了， 那错误逻辑在这里

              // 然后跳转
              // this.isStart = false;
              // this.onBack()
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
  async presentToast(message:any, color:any='success') {
    let toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      animated: true,
      mode: 'ios',
      color: color,
      buttons: ['关闭']
    });

    toast.present();//出发消息提示框
  }

  // 导航点击返回跳转
  onBack(){
    
    if(this.isStart){
      // 开始了
      // console.log('A type');
      
      this.doCancelSignIn()
    }else{
      // 还没开始
      // console.log('B type');
      
      this.onBackTo('/tabs/create-classes/sign-in-teacher')
    }
  }


}
