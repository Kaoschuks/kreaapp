import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CodeInputModule } from 'angular-code-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchPipe } from '../pipes/search';

import { CountryListComponent } from './ui/country-list/country-list.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { PinFormComponent } from './forms/pin-form/pin-form.component';
import { OnloadingComponent } from './ui/onloading/onloading.component';
import { OnerrorComponent } from './ui/onerror/onerror.component';
import { ForgetComponent } from './forms/forget/forget.component';
import { OtpFormComponent } from './forms/otp-form/otp-form.component';
import { ResetFormComponent } from './forms/reset-form/reset-form.component';
import { VerifyButtonComponent } from './buttons/verify-button/verify-button.component';

export const component: Array<any> = [
  SearchPipe,
  OnloadingComponent,
  OnerrorComponent,
  CountryListComponent,
  SignupFormComponent,
  SigninFormComponent,
  PinFormComponent,
  ForgetComponent,
  OtpFormComponent,
  ForgetComponent,
  ResetFormComponent,
  VerifyButtonComponent
];

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    IonicModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    FormsModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: false,
    }),
    RouterModule,
    NgxSpinnerModule,
  ],
  exports: component,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
