import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'create-classes',
        children: [
          {
            path: '',
            loadChildren: () => import('../create-classes/create-classes.module').then(m => m.CreateClassesPageModule)
            // loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'join-classes',
        children: [
          {
            path: '',
            loadChildren: () => import('../join-classes/join-classes.module').then(m => m.JoinClassesPageModule)
          },
        ]
      },
      {
        path: 'mine',
        children: [
          {
            path: '',
            loadChildren: () => import('../mine/mine.module').then(m => m.MinePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/join-classes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/join-classes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
