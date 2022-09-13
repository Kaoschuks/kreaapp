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

export const component: Array<any> = [
  SearchPipe,
  OnloadingComponent, OnerrorComponent,
  CountryListComponent,
  SignupFormComponent, SigninFormComponent, PinFormComponent
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: component,
})
export class ComponentsModule {}
