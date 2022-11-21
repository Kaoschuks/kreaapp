import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private __globals: GlobalsServices,
    ) { }

  ngOnInit() {
     this.__globals.sidebar  = false;
  }

}
