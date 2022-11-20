import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {
  @ViewChild('toolbartext') toolbartext: ElementRef;
  constructor() { }

  toolbarText: any = [
    'Welcome to FinPay',
    'Budgeting'
  ];

  ngOnInit() {
    
  }

  async gettoolbartext(ev: any) {
    return this.toolbartext.nativeElement.innerHTML = this.toolbarText[ev]
  }

}
