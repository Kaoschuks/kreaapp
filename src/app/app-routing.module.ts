import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/onboarding_pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/authentication_pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/authentication_pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/authentication_pages/verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/application_pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },  {
    path: 'profile-page',
    loadChildren: () => import('./pages/application_pages/accounts_pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
