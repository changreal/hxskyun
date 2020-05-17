import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
// import { LoginPageModule } from './pages/login/login.module';
// import { LoginPage } from './pages/login/login.page';
// import { PagesModule } from './pages/pages.module';

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

  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./layout/default/default.module').then( m => m.DefaultPageModule)
  // },


  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
    SharedModule,
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
