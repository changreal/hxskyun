import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPasswordPage } from './edit-password.page';

const routes: Routes = [
  {
    path: '',
    component: EditPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPasswordPageRoutingModule {}
