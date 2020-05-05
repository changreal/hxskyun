import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''
  password: string = ''
  constructor(private alertController: AlertController,private toastController: ToastController) { }

  ngOnInit() {
  }
 async onLogin(form:NgForm){
    console.log(this.username)
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
   
      if(1){
      } else{
        // 登录成功
       
      }
  

    }
}
}
