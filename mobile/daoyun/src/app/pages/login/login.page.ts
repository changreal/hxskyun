import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController, LoadingController ,} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''
  password: string = ''
  loading:any
  public dataList:any
  public peopleInfo:any = {
    username: this.username,
    password: this.password
  }
  
  constructor(private alertController: AlertController,private toastController: ToastController,
    public modalCtrl :ModalController,public loadingController: LoadingController,public http:HttpClient,
    private localStorageService: MylocalstorageService,public router:Router
    ) { }

  // async dismiss() {
  //   this.modalCtrl.dismiss({
  //     'dismissed': true
  //   });
  // }

  ngOnInit() {
  }
  
 async onLogin(form:NgForm){
    console.log(this.username+this.password)
    let url="https://imoocqa.gugujiankong.com/api/account/login"+"?mobile="+this.username+"&password="+this.password
    console.log("url"+url)
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
      this.presentLoading("登录中。。。。")
      this.http.get(url).subscribe((res)=>{
        if (1 == 1){
          // this.localStorageService.setStore('UserId',res["UserId"]);
          this.localStorageService.set('UserId','1')
          this.loading.dismiss()
          // this.dismiss();
          this.router.navigateByUrl('/tabs');
          console.log("succ  in ")
        }else{
          // this.loading.dismiss();
          this.presentToast(res["StatusContent"])
          console.log("faile in ")
          this.dataList=res
          console.log(this.dataList["Status"])

        }
          
        console.log(res)
      })


  

    }
}

async presentLoading(mes:string) {
   this.loading = await this.loadingController.create({
    message: mes,
    duration: 2000
  });
  await this.loading.present();
  console.log('Loading dismissed!');
}
async presentToast(mes:string) {
  const toast = await this.toastController.create({
    message: mes,
    duration: 2000
  });
  toast.present();
}
}
