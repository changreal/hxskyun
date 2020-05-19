import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinePage } from './mine.page';

const routes: Routes = [
  {
    path: '',
    component: MinePage
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'set-account',
    loadChildren: () => import('./set-account/set-account.module').then( m => m.SetAccountPageModule)
  },
  {
    path: 'edit-password',
    loadChildren: () => import('./edit-password/edit-password.module').then( m => m.EditPasswordPageModule)
  },
  {
    path: 'share-friends',
    loadChildren: () => import('./share-friends/share-friends.module').then( m => m.ShareFriendsPageModule)
  },
  {
    path: 'headfaces',
    loadChildren: () => import('./headfaces/headfaces.module').then( m => m.HeadfacesPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinePageRoutingModule {}
