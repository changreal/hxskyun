import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ToastController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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

  ngOnInit() {
  }

}
