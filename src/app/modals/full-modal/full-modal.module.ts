import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullModalPageRoutingModule } from './full-modal-routing.module';

import { FullModalPage } from './full-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullModalPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [FullModalPage]
})
export class FullModalPageModule {}
