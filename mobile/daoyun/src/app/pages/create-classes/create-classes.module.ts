import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateClassesPageRoutingModule } from './create-classes-routing.module';

import { CreateClassesPage } from './create-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateClassesPageRoutingModule
  ],
  declarations: [CreateClassesPage]
})
export class CreateClassesPageModule {}
