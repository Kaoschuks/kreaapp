import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'secure-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

  @Input() type: string = 'pin';
  pin: string = "";

  constructor() { }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";
      return;
    }

    if (this.pin.length === 5) {
      return;
    }
    this.pin += pin;
  }

  ngOnInit() {}

}
