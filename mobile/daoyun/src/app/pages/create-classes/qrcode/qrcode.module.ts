import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

import { QrcodePage } from './qrcode.page';
import { SharedModule } from 'src/app/modules';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePageRoutingModule,
    SharedModule
    
  ],
  declarations: [QrcodePage]
})
export class QrcodePageModule {}
