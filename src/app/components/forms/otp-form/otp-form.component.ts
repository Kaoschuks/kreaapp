import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.scss'],
})
export class OtpFormComponent implements OnInit {
  pin: any;

  constructor() { }

  ngOnInit() {}
     // this called every time when user changed the code
     onCodeChanged1(code: string) {}
     // this called only if user entered full code
     onCodeCompleted1(code: string) {
       this.pin = code;
     }
}
