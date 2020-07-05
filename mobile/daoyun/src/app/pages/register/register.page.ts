import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { BaseUI } from 'src/app/common/baseui';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BaseUI implements OnInit {
  register = {
    phone:'',
    email:'',
    name:'',
    id:'',
    password:'',
    confirmPassword:'',
    code:'',
    university:'',
    college:'',
    major:'',
    usertype:'',
    gender:''
  };
  
  constructor(private router: Router,public navCtrl: NavController, private alertCtrl:AlertController,public http: HttpClient,
    public common:CommonService,private toastController: ToastController,public loadingController: LoadingController) { super()}
  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigateByUrl('/login');
  }
  async onRegister(){
    let url='/Login/register'
    if(this.register.password !== this.register.confirmPassword){
      let toast = await this.toastController.create({
        message : '两次密码输入不一致',
        duration :3000
      });
      toast.present();
    }else{
      this.common.ajaxPost(url, this.register)
      .then((response:any)=>{
        if(response['code']==100){   
          console.log(response);
          this.presentToast(response["msg"])
          super.showLoading(this.loadingController,"跳转至登录。。。。")
          this.router.navigateByUrl('/login')    
          console.log("res suc ")
        }else if (response['code']==102){
          // this.loadingController.dismiss()
          this.presentToast(response["msg"])
        }else if(response['code']==103){
          this.presentToast(response["msg"])
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
