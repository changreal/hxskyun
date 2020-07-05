import { Component, OnInit } from '@angular/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  account = '' ;
  constructor(private localStorage:MylocalstorageService,
    private alertCtrl: AlertController,
    private navCtrl: NavController, private toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  async  onClick() {
    const user = this.localStorage.get('user', '');
    // console.log(this.account);

    if (this.account === '') {
      const toast = await this.toastCtrl.create({
        message: '请输入您的邮箱或者手机号码',
        duration: 3000
      });
      toast.present();
    } else if (this.account != user.accounts[0].identifier && this.account != user.accounts[1].identifier) {
      const alert = await this.alertCtrl.create({
        header: '提示',
        message: '账号要为已注册账户',
        buttons: ['知道了']
      });
      alert.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: '提示',
        message: '验证消息已发送，请及时查看',
        buttons: ['知道了']
      });
      alert.present();
      this.router.navigateByUrl('/login');
    }
  }


}
