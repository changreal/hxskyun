import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadfacesPage } from './headfaces.page';

const routes: Routes = [
  {
    path: '',
    component: HeadfacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadfacesPageRoutingModule {}
