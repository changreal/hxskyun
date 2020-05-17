import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';

// 引入组件
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPage,
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class SearchPageModule {}
