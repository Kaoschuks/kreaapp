import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CodeInputModule } from 'angular-code-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

export const component: Array<any> = [
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
