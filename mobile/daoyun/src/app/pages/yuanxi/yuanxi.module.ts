import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YuanxiPageRoutingModule } from './yuanxi-routing.module';

import { YuanxiPage } from './yuanxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YuanxiPageRoutingModule
  ],
  declarations: [YuanxiPage]
})
export class YuanxiPageModule {}
