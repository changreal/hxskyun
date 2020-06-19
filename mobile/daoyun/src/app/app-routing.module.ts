import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { LoginPageModule } from './pages/login/login.module';
import { StartAppGuard } from './core/start-app.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // 原来是home
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [StartAppGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  
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
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },  {
    path: 'edit-school',
    loadChildren: () => import('./pages/edit-school/edit-school.module').then( m => m.EditSchoolPageModule)
  },
  {
    path: 'yuanxi',
    loadChildren: () => import('./pages/yuanxi/yuanxi.module').then( m => m.YuanxiPageModule)
  },


 

 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
    SharedModule,

 
   
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
