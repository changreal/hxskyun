import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinClassesPage } from './join-classes.page';



const routes: Routes = [
  {
    path: '', 
    component: JoinClassesPage,
    
  },
  // {
  //   path: 'join-tabs',
  //   loadChildren: () => import('./join-tabs/join-tabs.module').then( m => m.JoinTabsPageModule)
  // },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  },
  {
    path: 'class-detail',
    loadChildren: () => import('./class-detail/class-detail.module').then( m => m.ClassDetailPageModule)
  },
  {
    path: 'join-class',
    loadChildren: () => import('./join-class/join-class.module').then( m => m.JoinClassPageModule)
  },
  

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class JoinClassesPageRoutingModule {}
