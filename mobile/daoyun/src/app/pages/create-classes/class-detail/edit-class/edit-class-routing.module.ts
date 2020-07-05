import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClassPage } from './edit-class.page';

const routes: Routes = [
  {
    path: '',
    component: EditClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClassPageRoutingModule {}
