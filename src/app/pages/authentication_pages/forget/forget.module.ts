import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPageRoutingModule } from './forget-routing.module';

import { ForgetPage } from './forget.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ForgetPage]
})
export class ForgetPageModule {}
