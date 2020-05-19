import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPasswordPageRoutingModule } from './edit-password-routing.module';

import { EditPasswordPage } from './edit-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPasswordPageRoutingModule
  ],
  declarations: [EditPasswordPage]
})
export class EditPasswordPageModule {}
