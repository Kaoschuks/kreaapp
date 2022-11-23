import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';
import {CodeInputComponent} from 'angular-code-input';

@Component({
  selector: 'otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.scss'],
})
export class OtpFormComponent implements OnInit {
  
  // adding to the page props
  @ViewChild('codeInput') codeInput !: CodeInputComponent;
  @Output() pinEvent = new EventEmitter();
  @Input() type: string = 'pin';
  pin: string = "";

  constructor(
    private _globals: GlobalsServices
  ) { }

  ngAfterViewInit() {
    console.log(this.codeInput)
  }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";
      return;
    }

    if (this.pin.length === 4) {
      return;
    }
    console.log(this.pin += pin);
  }

  ngOnInit() {}

  onCodeCompleted($e: any) {
    console.log($e);

    //this.pinEvent.emit('Verifying...');
    /** spinner starts on init */
    //this._globals.spinner.show();

    //setTimeout(() => {
      /** spinner ends after 5 seconds */
      //this._globals.spinner.hide();
      
     // this._globals.navigate('/tabs/more', false);
    
    //}, 5000);
  }

}
