import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ToastController, NavController, IonSlides } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgForm } from '@angular/forms';
import { BaseUI } from 'src/app/common/baseui';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';

@Component({
  selector: 'app-set-account',
  templateUrl: './set-account.page.html',
  styleUrls: ['./set-account.page.scss'],
})
export class SetAccountPage extends BaseUI implements OnInit {
  title: string;    // 用于获取传来的title
  property: string; // 用户获取传来的property
  value: any;       // 用于ngModel，从shop对象的相关属性中获取数据
  shop: any;        // 用于保存从本地存储中获得店铺数据
  @ViewChild('signupSlides' ,{static: true})  signupSlides: IonSlides;
  submited = false;
  slideIndex: any = 0;
  password:any
  oldpass:any
  userId:any
  constructor(private activatedRoute: ActivatedRoute, private localStorageService: MylocalstorageService,
    private statusBar: StatusBar,
    private navCtrl: NavController, private router: Router,
    private zrServices :ZrServicesService,
    private toastController: ToastController) { 
      super()
      activatedRoute.queryParams.subscribe(queryParams => {
        this.property = queryParams.property;
        this.title = queryParams.title;
      });
      // 沉浸式并且悬浮透明
      this.statusBar.overlaysWebView(true);
    }
    /**
 * 停止轮播
 */
ngOnInit() {
 
  this.userId=this.localStorageService.get('uid','')
  this.loadUserInfo()
  this.signupSlides.lockSwipes(true); 
// this.signupSlides.lockSwipeToNext(true);
}
    // loadUserInfo(){
    //   this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
    //     console.log('here:', result.data);
    //     if(result.code=='200'){
    //         this.oldpass=result.data.password
    //     }else{
    //       super.showToast(this.toastController,'获取失败')
    //     } 
    //   }).catch((error) => {
    //     console.log('密码错误', error)
    //   })
      
    // }
  /**
   * 记录当前slide的索引
   */
  onSlideDidChange() {

    // 原来是这样，会有问题
    // this.slideIndex = this.signupSlides.getActiveIndex();
    // console.log('当前轮播索引: ' + this.slideIndex);

  this.slideIndex = this.signupSlides.getActiveIndex().then((index:number) =>{
      this.slideIndex = index;
      console.log('当前轮播索引：' + this.slideIndex)
    }  
  )
}


onNext(){
  this,this.signupSlides.lockSwipes(false);
  this.signupSlides.slideNext();
  this.slideIndex++;
  this.signupSlides.lockSwipes(true);
}
onPrevious() {
    this.signupSlides.lockSwipes(false);
    this.signupSlides.slidePrev();
    this.slideIndex--;
    this.signupSlides.lockSwipes(true);
}
checkPassword(form: NgForm){
  console.log(this.submited);
  // this.submited = true;
  // 通过验证
   console.log(form.valid);
   console.log('fsd'+this.password)
  if (this.password==this.oldpass) {
    // 已通过客户端验证
    this.onNext();
  }else{
    super.showToast(this.toastController,'密码错误')
  }
}
onSave(){
  let params:object
    if(this.title=='关联手机'){
       params = {
      "userId" : this.userId,
      "phone" : this.value
      }
    }else if(this.title=='关联邮箱'){
      params= {
        "userId" : this.userId,
        "email" : this.value
        }
    }
  this.zrServices.updateUserinfo(params).then((result:any) => {
    console.log('更新:', result.data);
    if(result.code=='200'){
       super.showToast(this.toastController,'用户信息更新成功,重新登录')
       this.router.navigateByUrl('/login') 
       console.log(result.code)
       console.log('userdetail：',result.data);
       console.log(result.msg)
   }else {
       super.showToast(this.toastController,'用户信息更新失败')
   }
   }).catch((error) => {
     super.showToast(this.toastController,'用户信息更新失败')
   })
}
loadUserInfo(){

  this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
    console.log('here:', result.data);
    if(result.code=='200'){
        console.log('asgagaeegeagr'+result.data.roleId)   
        this.oldpass=result.data.password
    } else{
      // super.showToast(this.toastController,'获取信息失败')
      // super.showToast(this.toastController,'用户信息更新失败')
    }
  }).catch((error) => {
    console.log('获取用户信息失败', error)
  })
  
}
}
