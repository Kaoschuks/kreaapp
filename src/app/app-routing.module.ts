import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/application_pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
