import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController, LoadingController ,} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { BaseUI } from 'src/app/common/baseui';
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
    private localStorageService: MylocalstorageService,public router:Router,public common:CommonService
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
    let url='/Login/checkLogin'
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
      // 验证登录账号与密码，不对的话给出错误提示
      // this.presentLoading("登录中。。。。")
      // this.http.get(url).subscribe((res)=>{
      //   if (1 == 1){
      //     // this.localStorageService.setStore('UserId',res["UserId"]);
      //     this.localStorageService.set('UserId','1')
      //     this.loading.dismiss()
      //     // this.dismiss();
      //     this.router.navigateByUrl('/tabs');
      //     console.log("succ  in ")
      //   }else{
      //     // this.loading.dismiss();
      //     this.presentToast(res["StatusContent"])
      //     console.log("faile in ")
      //     this.dataList=res
      //     
      //   }
      //   console.log(res)
      // })
      super.showLoading(this.loadingController,"登录中。。。。")
      
      this.common.ajaxPost(url, this.peopleInfo)
      .then((response:any)=>{
        if(response['success']==true){
         
          console.log(response);
          this.localStorageService.set('Token',response["data"])
          this.loadingController.dismiss()
          this.router.navigateByUrl('/tabs')    

          console.log("succ  in ")
        }else{
          this.loadingController.dismiss
          this.presentToast("请检查用户名和密码")
        }
      })
      .catch((err:any)=>{
        console.log(err);
      })
    }
}

async presentToast(mes:string) {
  const toast = await this.toastController.create({
    message: mes,
    duration: 2000
  });
  toast.present();
}





}
