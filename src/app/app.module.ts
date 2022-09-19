import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, mdTransitionAnimation } from '@ionic/angular';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { HalfModalPage } from './modals/half-modal/half-modal.page';
import { FullModalPage } from './modals/full-modal/full-modal.page';



@NgModule({
  declarations: [
    AppComponent, HalfModalPage, FullModalPage
  ],
  imports: [
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    ComponentsModule,
    ServicesModule,
    IonicModule.forRoot({
      navAnimation: mdTransitionAnimation,
      mode: 'md',
    }), 
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
