import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YuanxiPage } from './yuanxi.page';

const routes: Routes = [
  {
    path: '',
    component: YuanxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YuanxiPageRoutingModule {}
