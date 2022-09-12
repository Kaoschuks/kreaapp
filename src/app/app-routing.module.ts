import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/application_pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
<<<<<<< Updated upstream
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'half-modal',
    loadChildren: () => import('./pages/modals/half-modal/half-modal.module').then( m => m.HalfModalPageModule)
  },
  {
    path: 'full-modal',
    loadChildren: () => import('./pages/modals/full-modal/full-modal.module').then( m => m.FullModalPageModule)
=======
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
>>>>>>> Stashed changes
  },
];

<<<<<<< Updated upstream
=======

];

>>>>>>> Stashed changes
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
