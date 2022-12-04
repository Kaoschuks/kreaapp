import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePagePageRoutingModule } from './profile-page-routing.module';

import { ProfilePagePage } from './profile-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProfilePagePageRoutingModule
  ],
  declarations: [ProfilePagePage]
})
export class ProfilePagePageModule {}
