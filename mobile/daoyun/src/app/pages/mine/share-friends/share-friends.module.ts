import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareFriendsPageRoutingModule } from './share-friends-routing.module';

import { ShareFriendsPage } from './share-friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareFriendsPageRoutingModule
  ],
  declarations: [ShareFriendsPage]
})
export class ShareFriendsPageModule {}
