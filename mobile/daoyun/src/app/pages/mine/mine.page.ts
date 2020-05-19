import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { UserInfoPage } from './user-info/user-info.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
  public notLogin: boolean = true
  public logined: boolean = false
  headface: string
  userinfo: string[]

  constructor(public modalController: ModalController,private localStorageService: MylocalstorageService,
    public navCtrl: NavController,public router:Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  async showModal(){
    let modal =  await this.modalController.create({
      component: LoginPage
    });
    modal.present()
  }

  ionViewWillEnter() {
    this.loadUserPage();
    console.log(this.logined)
  }
  loadUserPage() {
    console.log('load in ')
    let val=this.localStorageService.get('UserId','')
      if(val!=null){
        this.notLogin = false
        this.logined = true
      }        
      else{
        this.notLogin = true
        this.logined = false
      }
    }
   // 注销
   logout() {
    this.localStorageService.remove('UserId');
    this.router.navigateByUrl('/login');
  }
  //
 async checkVersion(){
  const alert = await this.alertController.create({
    header: '升级信息',
    message: '你已安装了最新版本',
    buttons: ['ok']
  });

  await alert.present();
}


  
}
