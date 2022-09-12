import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from 'src/app/components/auth/forget/forget.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
