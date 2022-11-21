import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';


@Component({
  selector: 'otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.scss'],
})
export class OtpFormComponent implements OnInit {

  @Output() pinEvent = new EventEmitter();

  constructor(
    private _globals: GlobalsServices
  ) { }

  ngOnInit() {}

  onCodeCompleted($e: any) {
    this.pinEvent.emit('Verifying...');
    /** spinner starts on init */
    this._globals.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._globals.spinner.hide();
      
     // this._globals.navigate('/tabs/more', false);
    
    }, 5000);
  }

}
