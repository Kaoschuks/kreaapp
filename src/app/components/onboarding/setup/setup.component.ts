import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'onboarding-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {

  @Input() step: number = 0
  constructor() { }

  ngOnInit() {}

  userInfoData(data: any) {
    console.log(JSON.stringify(data));
  }

}
