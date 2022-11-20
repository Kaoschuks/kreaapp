import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

//import { NgxSpinnerModule } from 'ngx-spinner';
import { CodeInputModule } from 'angular-code-input';
import { SwiperModule } from 'swiper/angular';
//import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchPipe } from '../pipes/search';

import { CountryListComponent } from './ui/country-list/country-list.component';
import { OnloadingComponent } from './ui/onloading/onloading.component';
import { OnerrorComponent } from './ui/onerror/onerror.component';
import { SidebarNavComponent } from './ui/sidebar-nav/sidebar-nav.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { FullLoadingComponent } from './ui/full-loading/full-loading.component';

import { OnboardingSwiperComponent } from './onboarding/onboarding-swiper/onboarding-swiper.component';

import { SigninFormComponent } from './forms/signin/signin-form/signin-form.component';
import { PinFormComponent } from './forms/pin-form/pin-form.component';

export const component: Array<any> = [
  SearchPipe,
  CountryListComponent,
  PinFormComponent,
  SidebarNavComponent, ProgressBarComponent, FullLoadingComponent, OnloadingComponent, OnerrorComponent,
  OnboardingSwiperComponent, SigninFormComponent
];

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    IonicModule,
    //NgxIntlTelInputModule,
    ReactiveFormsModule,
    FormsModule,
    CodeInputModule.forRoot({
      codeLength: 5,
      isCharsCode: false,
    }),
    RouterModule,
    SwiperModule,
    //NgxSpinnerModule,
  ],
  exports: component,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
