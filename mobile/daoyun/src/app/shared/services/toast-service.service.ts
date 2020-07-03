import { Injectable } from '@angular/core';
import { ToastController,} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class ToastServiceProvider {

//自己定义的三种消息框样式
  errorColor='danger'
  generalColor='primary'
  successColor='success'

/**
构造函数引入
*/
  constructor(public toast:ToastController,
              public alertController:AlertController,
              private router: Router) {
    console.log('Hello ToastServiceProvider Provider');
  }

  refresh(){location.reload()}

/**
 * toaset的部分
 */

  errorToast(message:any){
    this.presentToast(message,this.errorColor);
  }
  generalToast(message:any){
    this.presentToast(message,this.generalColor);
  }
  successToast(message:any){
    this.presentToast(message,this.successColor);
  }

  /**
   * 没有回调的toast
   * @param message
   * @param css 
   */
  async presentToast(message:any,color:string) {
    let toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      animated: true,
      mode: 'ios',
      color:color,
      buttons: ['关闭']
    });

    toast.present();//出发消息提示框
  }

  /**
   *
   * 有回调的toast
   */
  async presentToastWithOptions(message:any,css:string) {
    let toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      animated: true,
      mode: 'ios',
      color:css,//自己给消息框定义的样式，css样式名称
      buttons: [
        {
          text: '关闭',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    toast.present();//出发消息提示框
  }


  /**
   * alert的部分
   */
  errorAlert(message:any){
    this.presentAlert(message)
  }


  // 无回调的alert提示框
  async presentAlert(message:any) {
    const alert = await this.alertController.create({
      animated: true,
      // cssClass: 'my-custom-class',
      // mode:'md',
      header: '提示',
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['好的']
    });

    await alert.present();
  }

  // 点击按钮有回调跳转的Alert确认框
  async presentAlertConfirm(message:any, url:any, params?:any) {
    const alert = await this.alertController.create({
      animated: true,
      // cssClass: 'my-custom-class',
      header: '提示',
      message: message,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: ()=>{
            this.router.navigate([url],{
              queryParams : params
            })
            // location.replace(url)
          }
        }
      ]
    });

    await alert.present();
  }




}

