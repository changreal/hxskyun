import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  oldpassword: string;
  newPassword: string;
  checkPassword: string;
  constructor(public toastCtrl:ToastController) { }

  ngOnInit() {
  }
  async onLogin() {
   
   
    if ( this.newPassword==this.oldpassword && this.newPassword == this.checkPassword) {
      //更新密码
      console.log('一致');
      const toast = await this.toastCtrl.create({
        message: '一致',
        duration: 4000
      });
      await toast.present();
    }
    else{
      console.log('一致');
      const toast = await this.toastCtrl.create({
        message: '不一致',
        duration: 4000
      });
      await toast.present();

    }
  }
}
