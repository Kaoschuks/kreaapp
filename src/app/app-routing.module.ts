import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/application_pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/authentication_pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/authentication_pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/authentication_pages/signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'reset',
    loadChildren: () => import('./pages/authentication_pages/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'create-pin',
    loadChildren: () => import('./pages/authentication_pages/create-pin/create-pin.module').then( m => m.CreatePinPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./pages/authentication_pages/forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/authentication_pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'identity-verification',
    loadChildren: () => import('./pages/authentication_pages/identity-verification/identity-verification.module').then( m => m.IdentityVerificationPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
