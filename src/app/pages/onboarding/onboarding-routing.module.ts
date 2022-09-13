import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from 'src/app/components/onboarding/slider/slider.component';

import { OnboardingPage } from './onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {}
