import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { UserInfoPage } from './user-info/user-info.page';
import { Router } from '@angular/router';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { UserInfo } from 'src/app/myClass/userinfo';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
  public notLogin: boolean = true
  public logined: boolean = false
  headface: string
  userinfo= 
  {"userId": '',
  "name": ''
  // "sex": '',
  // "phone":'',
  // "email": '',
  // "age": '',
  // "roleId": '',
  // "birthDate": '',
  // "school": '',
  // "academy": '',
  // "major": '',
  // "creationDate": '',
  // "creator": '',
  // "modifier": '',
  // "modificationDate": '',
  // "password": ''
}
  userId:any
  constructor(public modalController: ModalController,private localStorageService: MylocalstorageService,
    public eventService: EventService,
    public navCtrl: NavController,public router:Router,public alertController: AlertController,private zrServices: ZrServicesService) { }

  ngOnInit() {
  }
  async showModal(){
    let modal =  await this.modalController.create({
      component: LoginPage
    });
    modal.present()
  }

  ionViewDidEnter() {
    this.userId=this.localStorageService.get('uid','')
    console.log(this.userinfo)
    this.loadUserInfo()
    this.eventService.event.on('userupdate', () => {
      this.loadUserInfo();
    })

    // this.loadUserInfo()
    console.log('mine view in ')
    console.log(this.userinfo.name)
    // this.loadUserPage();
    // console.log(this.logined)
  }
  // loadUserPage() {
  //   console.log('load in ')
  //   let val=this.localStorageService.get('UserId','')
  //     if(val!=null){
  //       this.notLogin = false
  //       this.logined = true
  //     }        
  //     else{
  //       this.notLogin = true
  //       this.logined = false
  //     }
  //   }
   // 注销
   loadUserInfo(){

    this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
      console.log('here:', result.data);
      if(result.success){
        this.userinfo.name=result.data.name 
      }  
    }).catch((error) => {
      console.log('获取用户信息失败', error)
    })
  }
   logout() {
    this.localStorageService.remove('Token');
    this.localStorageService.remove('uid');
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
