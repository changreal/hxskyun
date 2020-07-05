import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInResultPage } from './sign-in-result.page';

const routes: Routes = [
  {
    path: '',
    component: SignInResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInResultPageRoutingModule {}
