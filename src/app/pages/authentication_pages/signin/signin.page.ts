import { Component, OnInit, Input } from '@angular/core';
import { SigninFormComponent } from 'src/app/components/forms/signin/signin-form/signin-form.component';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  slideOpts = {
  };

  constructor(
    private globalsServices: GlobalsServices
    ) { }

  ngOnInit() {
    this.globalsServices.sidebar  = false;
  }

}