import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetAccountPageRoutingModule } from './set-account-routing.module';

import { SetAccountPage } from './set-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetAccountPageRoutingModule
  ],
  declarations: [SetAccountPage]
})
export class SetAccountPageModule {}
