import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CodeInputModule } from 'angular-code-input';
import { SwiperModule } from 'swiper/angular';
import { NgApexchartsModule } from 'ng-apexcharts';

import { SearchPipe } from '../pipes/search';
import { DateAsAgoPipe } from '../pipes/dateAsAgo';

import { CountryListComponent } from './popup-modals/country-list/country-list.component';
import { RegisterSuccessComponent } from './popup-modals/register-success/register-success.component';
import { BiometricUiComponent } from './popup-modals/biometric-ui/biometric-ui.component';
import { CompleteSetupComponent } from './popup-modals/complete-setup/complete-setup.component';

import { SignupFormComponent } from './forms/signup/signup-form/signup-form.component';
import { SigninFormComponent } from './forms/signin/signin-form/signin-form.component';
import { OtpFormComponent } from './forms/otp-form/otp-form.component';

import { OnloadingComponent } from './ui/onloading/onloading.component';
import { OnerrorComponent } from './ui/onerror/onerror.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { BusyLoadingComponent } from './ui/busy-loading/busy-loading.component';
import { MobileHeaderComponent } from './ui/mobile-header/mobile-header.component';

import { LinechartComponent } from './ui/charts/linechart/linechart.component';

import { OnboardingSwiperComponent } from './onboarding/onboarding-swiper/onboarding-swiper.component';
import { SetupComponent } from './onboarding/setup/setup.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DesktopViewComponent } from './layouts/desktop-view/desktop-view.component';
import { SubpageLayoutComponent } from './layouts/subpage-layout/subpage-layout.component';

import { TransactionListComponent } from './application_components/transactions/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './application_components/transactions/transaction-details/transaction-details.component';

import { RoleComponent } from './category/role/role.component';

export const component: Array<any> = [
  SearchPipe, DateAsAgoPipe,
  OnloadingComponent, OnerrorComponent, ProgressBarComponent, BusyLoadingComponent,
  SetupComponent,
  CountryListComponent, OnboardingSwiperComponent, MobileHeaderComponent, DesktopViewComponent, CompleteSetupComponent,
  SignupFormComponent, SigninFormComponent, OtpFormComponent,  AuthLayoutComponent, 
  RegisterSuccessComponent, BiometricUiComponent, SubpageLayoutComponent, TransactionListComponent,
  TransactionDetailsComponent, RoleComponent, LinechartComponent
];

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    CodeInputModule.forRoot({
      codeLength: 5,
      isCharsCode: false,
    }),
    SwiperModule,
    RouterModule,
    NgxSpinnerModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: component,
})
export class ComponentsModule {}
