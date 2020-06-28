import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引入http和jsonp模块
import {HttpClientModule,HttpClientJsonpModule } from "@angular/common/http"
// 引用服务
import { CommonService } from "./shared/services/common.service";
// 公用module
import { LoginPage } from './pages/login/login.page';
import { LoginPageModule } from './pages/login/login.module';
import { pipe } from 'rxjs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    

  ],

  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
