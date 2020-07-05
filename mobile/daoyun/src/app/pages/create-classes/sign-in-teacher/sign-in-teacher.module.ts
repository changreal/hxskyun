import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInTeacherPageRoutingModule } from './sign-in-teacher-routing.module';

import { SignInTeacherPage } from './sign-in-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInTeacherPageRoutingModule
  ],
  declarations: [SignInTeacherPage]
})
export class SignInTeacherPageModule {}
