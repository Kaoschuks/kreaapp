import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  
  public note = '';
  public amount: number | string = ''
  
  constructor(
    private globalsServices: GlobalsServices
    ) { }

  ngOnInit() {
    this.globalsServices.logginIn = true;
    this.globalsServices.sidebar  = false;
  }

}
