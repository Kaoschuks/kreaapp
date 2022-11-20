import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'country',
    pathMatch: 'full'
  },
  {
    path: 'country',
    loadChildren: () => import('./pages/onboarding_pages/country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/onboarding_pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/application_pages/home/home.module').then( m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
