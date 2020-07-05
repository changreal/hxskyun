import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassDetailPageRoutingModule } from './class-detail-routing.module';

import { ClassDetailPage } from './class-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassDetailPageRoutingModule
  ],
  declarations: [ClassDetailPage]
})
export class ClassDetailPageModule {}
