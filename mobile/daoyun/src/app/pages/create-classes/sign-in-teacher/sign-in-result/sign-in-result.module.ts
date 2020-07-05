import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInResultPageRoutingModule } from './sign-in-result-routing.module';

import { SignInResultPage } from './sign-in-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInResultPageRoutingModule
  ],
  declarations: [SignInResultPage]
})
export class SignInResultPageModule {}
