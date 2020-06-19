import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSchoolPage } from './edit-school.page';

const routes: Routes = [
  {
    path: '',
    component: EditSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSchoolPageRoutingModule {}
