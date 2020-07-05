import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QrCodeComponent, } from './components/index';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    QrCodeComponent,
  
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    QrCodeComponent,
  
  ],
  entryComponents: [
    
  ],
  providers: [
  ]
})
export class SharedModule {}
