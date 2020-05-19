import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage implements OnInit {
  isOldPassword = true;
  oldpassword: string;
  newPassword: string;
  checkPassword: string;
  constructor(public router:Router,private toastCtrl: ToastController,) { }

  ngOnInit() {
  }
  async onSave() {
    // 验证旧密码
    const oldPass = '123456';
    this.isOldPassword = oldPass == this.oldpassword ? true : false;
    // 验证新密码
    if ( this.isOldPassword && this.newPassword == this.checkPassword) {
      //更新密码
      console.log('修改成功');
      this.router.navigateByUrl('/mine/edit-account');  
      const toast = await this.toastCtrl.create({
        message: '修改成功',
        duration: 2000
      });
      await toast.present();
    }
  }

}
