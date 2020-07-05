import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInTeacherPage } from './sign-in-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: SignInTeacherPage
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-in-result',
    loadChildren: () => import('./sign-in-result/sign-in-result.module').then( m => m.SignInResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInTeacherPageRoutingModule {}
