import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAccountPageRoutingModule } from './edit-account-routing.module';

import { EditAccountPage } from './edit-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAccountPageRoutingModule
  ],
  declarations: [EditAccountPage]
})
export class EditAccountPageModule {}
