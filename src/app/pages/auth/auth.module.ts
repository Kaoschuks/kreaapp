import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';
import { ForgetComponent } from 'src/app/components/auth/forget/forget.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [
    LoginComponent, 
    SignupComponent,
    ForgetComponent
  ]
})
export class AuthPageModule {}
