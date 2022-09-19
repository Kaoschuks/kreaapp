import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentityVerificationPageRoutingModule } from './identity-verification-routing.module';

import { IdentityVerificationPage } from './identity-verification.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentityVerificationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IdentityVerificationPage]
})
export class IdentityVerificationPageModule {}
