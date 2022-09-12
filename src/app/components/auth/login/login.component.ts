import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location, 
    private globalService: GlobalsServices
  ) { }

  ngOnInit() {}
  back() {
    this.location.back();
  }
  signup() {
    this.globalService.navigate('auth/signup');
  }
}
