import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSchoolPageRoutingModule } from './edit-school-routing.module';

import { EditSchoolPage } from './edit-school.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSchoolPageRoutingModule,
  ],
  declarations: [EditSchoolPage]
})
export class EditSchoolPageModule {}
