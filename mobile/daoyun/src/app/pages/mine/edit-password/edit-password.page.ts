import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { BaseUI } from 'src/app/common/baseui';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage extends BaseUI implements OnInit {
  isOldPassword = true;
  oldPass:any
  oldpassword: string;
  newPassword: string;
  checkPassword: string;
  userId:any
  constructor(public router:Router,
    private localStorageService :MylocalstorageService,private zrServices :ZrServicesService,
    private toastController: ToastController,) { 
      super()
    }

  async onSave() {
    this.isOldPassword = this.oldPass == this.oldpassword ? true : false;
    // 验证新密码
    let params:object = {
      "userId" : this.userId,
      "password" : this.newPassword
    }
    if ( this.isOldPassword && this.newPassword == this.checkPassword) {
      this.zrServices.updateUserinfo(params).then((result:any) => {
        console.log('更新:', result.data.password);
        if(result.code=='200'){
           super.showToast(this.toastController,'更新成功,重新登录')
           this.router.navigateByUrl('/login') 
           this.localStorageService.remove('Token');
           this.localStorageService.remove('uid');    
       }
       }).catch((error) => {
        console.log('错了。。。。')
         super.showToast(this.toastController,'密码更新失败')
       })
    }
    else {
        super.showToast(this.toastController,'密码不正确')
    }
  }
  ngOnInit() {
    
  }
  
  ionViewDidEnter(){
    this.userId=this.localStorageService.get('uid','')
    this.loadUserInfo()
  }
  loadUserInfo(){

    this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
      console.log('here:', result.data);
      if(result.code=='200'){
          console.log('asgagaeegeagr'+result.data.roleId)   
          this.oldPass=result.data.password
      } else{
        // super.showToast(this.toastController,'获取信息失败')
        // super.showToast(this.toastController,'用户信息更新失败')
      }
    }).catch((error) => {
      console.log('获取用户信息失败', error)
    })
    
  }

}
