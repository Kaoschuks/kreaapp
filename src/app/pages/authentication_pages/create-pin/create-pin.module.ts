import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePinPageRoutingModule } from './create-pin-routing.module';

import { CreatePinPage } from './create-pin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePinPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreatePinPage]
})
export class CreatePinPageModule {}
