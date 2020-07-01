import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController, LoadingController ,} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { BaseUI } from 'src/app/common/baseui';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseUI implements OnInit {
  
  public loadingIsOpen: any = false
  username: string = ''
  password: string = ''
  loading:any
  public dataList:any
  public peopleInfo:any = {
    phone: '',
    password:''
  }

  constructor(private alertController: AlertController,private toastController: ToastController,
    public modalCtrl :ModalController,public loadingController: LoadingController,public http:HttpClient,
    private localStorageService: MylocalstorageService,public router:Router,public common:CommonService,private zrServices: ZrServicesService
    ) { super()}

  // async dismiss() {
  //   this.modalCtrl.dismiss({
  //     'dismissed': true
  //   });
  // }

  ngOnInit() {
  }
  
 async onLogin(form:NgForm){
    console.log(this.username+this.password)
    // let url="https://imoocqa.gugujiankong.com/api/account/login"+"?mobile="+this.username+"&password="+this.password
    // let url='/Login/checkLogin'
    this.peopleInfo.phone=this.username
    this.peopleInfo.password=this.password
    console.log("login info:"+this.peopleInfo)
    if(this.username === ''){
      let toast = await this.toastController.create({
        message : '请输入您的手机号码或者邮箱',
        duration :3000
      });
      toast.present();

    }else if(this.password === ''){
      let alert = await this.toastController.create({
        message : '请输入您的密码',
        duration : 3000
      });
      alert.present();

    }else{
      let params:object = {
        "phone" : this.username,
        "password" : this.password
      }
      // 验证登录账号与密码，不对的话给出错误提示
      super.showLoading(this.loadingController,"登录中。。。。")
      this.zrServices.login(params).then((result:any) => {
        if(result.code=='100'){
            this.localStorageService.set('Token',result["data"])
            console.log('uid'+result.extra.userRole.userId)
            this.localStorageService.set('uid',result.extra.userRole.userId)
            super.showToast(this.toastController,'登录成功')
            this.router.navigateByUrl('/tabs') 
            console.log(result);   
       }else {
            console.log(result)
            super.showToast(this.toastController,'登录失败,请检查账号和密码')
       }
       }).catch((error) => {
            super.showToast(this.toastController,'登录失败')
       })
     }
      // this.common.ajaxPost(url, this.peopleInfo)
      // .then((response:any)=>{
      //   super.showToast(this.toastController,response)
      //   if(response['code']==100){   
      //     console.log(response);
      //     this.localStorageService.set('Token',response["data"])
      //     console.log('uid'+response['extra'])
      //     this.router.navigateByUrl('/tabs')    
      //     console.log("succ  in ")
      //   }else{
      //     this.presentToast(response["msg"])    
      //   }
      // })
      // .catch((err:any)=>{
      //   console.log(err);
      //   super.showToast(this.toastController,err)
      // })
    }


async presentToast(mes:string) {
  const toast = await this.toastController.create({
    message: mes,
    duration: 2000
  });
  toast.present();
}





}
