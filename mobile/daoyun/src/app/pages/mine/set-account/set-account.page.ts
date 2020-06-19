import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ToastController, NavController, IonSlides } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-account',
  templateUrl: './set-account.page.html',
  styleUrls: ['./set-account.page.scss'],
})
export class SetAccountPage implements OnInit {
  title: string;    // 用于获取传来的title
  property: string; // 用户获取传来的property
  value: any;       // 用于ngModel，从shop对象的相关属性中获取数据
  shop: any;        // 用于保存从本地存储中获得店铺数据
  @ViewChild('signupSlides' ,{static: true})  signupSlides: IonSlides;
  submited = false;
  slideIndex: any = 0;
  
  constructor(private activatedRoute: ActivatedRoute, private localStorageService: LocalStorageService,
    private toastCtrl: ToastController, private statusBar: StatusBar,
    private navCtrl: NavController, private router: Router) { 
      activatedRoute.queryParams.subscribe(queryParams => {
        this.property = queryParams.property;
        this.title = queryParams.title;
      });
      // 沉浸式并且悬浮透明
      this.statusBar.overlaysWebView(true);
    }

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


/**
 * 停止轮播
 */
ngOnInit() {
  this.signupSlides.lockSwipes(true); 
  // this.signupSlides.lockSwipeToNext(true);

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
  // console.log(this.submited);
  this.submited = true;
  // 通过验证
  if (form.valid) {
    // 已通过客户端验证
    this.onNext();
  }
}
}
