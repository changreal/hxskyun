import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClassPageRoutingModule } from './edit-class-routing.module';

import { EditClassPage } from './edit-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClassPageRoutingModule
  ],
  declarations: [EditClassPage]
})
export class EditClassPageModule {}
