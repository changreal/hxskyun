import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassDetailPage } from './class-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClassDetailPage
  },
  {
    path: 'edit-class',
    loadChildren: () => import('./edit-class/edit-class.module').then( m => m.EditClassPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassDetailPageRoutingModule {}
