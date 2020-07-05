import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareFriendsPage } from './share-friends.page';

const routes: Routes = [
  {
    path: '',
    component: ShareFriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareFriendsPageRoutingModule {}
