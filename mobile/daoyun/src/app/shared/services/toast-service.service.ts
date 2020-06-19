import { Injectable } from '@angular/core';
import { ToastController,} from '@ionic/angular';


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
  constructor(public toast:ToastController) {
    console.log('Hello ToastServiceProvider Provider');
  }

  /**
   * 错误信息提示框
   * @param message 消息
   */
  errorToast(message:any){
    this.presentToast(message,this.errorColor);
  }

  /**
   * 普通信息提示框
   * @param message 消息
   */
  generalToast(message:any){
    this.presentToast(message,this.generalColor);
  }

  /**
   * 成功信息提示框
   * @param message
   */
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

}

