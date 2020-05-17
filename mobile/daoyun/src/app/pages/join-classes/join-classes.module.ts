import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinClassesPageRoutingModule } from './join-classes-routing.module';

import { JoinClassesPage } from './join-classes.page';
// 引入自定义模块
import { SearchPageModule }  from '../search/search.module'
import { MembersPageModule } from "./members/members.module";
// 引入自定义组件
import { PopoverComponent } from "../components/popover/popover.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ComponentsModule,
    JoinClassesPageRoutingModule,
    SearchPageModule,
    MembersPageModule,
  ],
  entryComponents: [PopoverComponent],
  declarations: [JoinClassesPage,PopoverComponent],
})
export class JoinClassesPageModule {}
