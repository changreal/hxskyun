import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetAccountPage } from './set-account.page';

const routes: Routes = [
  {
    path: '',
    component: SetAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetAccountPageRoutingModule {}
