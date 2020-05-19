import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { LoginPageModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'join-classes',
    loadChildren: () => import('./pages/join-classes/join-classes.module').then( m => m.JoinClassesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'create-classes',
    loadChildren: () => import('./pages/create-classes/create-classes.module').then( m => m.CreateClassesPageModule)
  },
  {
    path:'mine',
    loadChildren:()=>import('./pages/mine/mine.module').then(m=>m.MinePageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
    SharedModule,
    LoginPageModule
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
