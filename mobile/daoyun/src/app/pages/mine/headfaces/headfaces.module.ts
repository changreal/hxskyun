import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadfacesPageRoutingModule } from './headfaces-routing.module';

import { HeadfacesPage } from './headfaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadfacesPageRoutingModule
  ],
  declarations: [HeadfacesPage]
})
export class HeadfacesPageModule {}
