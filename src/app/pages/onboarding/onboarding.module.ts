import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { SliderComponent } from 'src/app/components/onboarding/slider/slider.component';
import { SplashComponent } from 'src/app/components/onboarding/splash/splash.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule
  ],
  declarations: [SliderComponent, SplashComponent]
})
export class OnboardingPageModule {}
