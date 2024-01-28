import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxOtpInputComponent, NgxOtpInputConfig, NgxOtpInputModule } from 'ngx-otp-input';

@Component({
  selector: 'otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgxOtpInputModule]
})
export class OtpInputComponent {
  @ViewChild('ngxotp') ngxOtp: NgxOtpInputComponent | any;
  @Input() clearInput(clear: boolean) {
    if(clear) this.ngxOtp.clear();
  }
  @Output() onCompleted = new EventEmitter<any>();
  otpInputConfig: NgxOtpInputConfig | any = {
    otpLength: 6,
    autoFocus: true,
    numericInputMode: true,
    isPasswordInput: true,
    classList: {
      container: 'bg-white text-dark',
      inputBox: 'bg-white text-dark',
      input: 'bg-white text-dark',
      inputFilled: 'bg-white text-dark',
      inputDisabled: 'bg-light text-dark',
      inputSuccess: 'bg-success text-white',
      inputError: 'bg-danger text-white',
    },
  };

}
