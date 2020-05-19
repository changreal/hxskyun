import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateClassesPage } from './create-classes.page';

const routes: Routes = [
  {
    path: '',
    component: CreateClassesPage
  },
  {
    path: 'create-class',
    loadChildren: () => import('./create-class/create-class.module').then( m => m.CreateClassPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  },
  {
    path: 'class-detail',
    loadChildren: () => import('./class-detail/class-detail.module').then( m => m.ClassDetailPageModule)
  },
  {
    path: 'sign-in-teacher',
    loadChildren: () => import('./sign-in-teacher/sign-in-teacher.module').then( m => m.SignInTeacherPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateClassesPageRoutingModule {}
