import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biometric-ui',
  templateUrl: './biometric-ui.component.html',
  styleUrls: ['./biometric-ui.component.scss'],
})
export class BiometricUiComponent implements OnInit {

  @Input() page: any;

  constructor() { }

  ngOnInit() {
    console.log(this.page);
  }

}
