import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsServices } from 'src/app/services/core/globals';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slides: any = [
    {
      img: 'assets/icon/slider_1.svg',
      title: 'Managing your money is about to get a lot better.',
      pagetitle: 'Welcome to FinPay'
    },
    {
      img: 'assets/icon/slider_2.svg',
      title: 'Spend smarter every day, all from one app.',
      pagetitle: 'Budgeting'
    }
  ];
  skipMsg: any = 'Skip';
  constructor(
    private _router: Router,
    private globalService: GlobalsServices
    ) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts: any = {
    slidesPerView: 1,
    speed: 400,
    pager: true,
  };
  ngOnInit() {
  }
  direction() {
    // eslint-disable-next-line no-underscore-dangle
    this._router.navigate(['onboarding/direction']);
  }
  // function to skip
  skip() {
      this.globalService.navigate('auth');
  }
  login() {
    this.globalService.navigate('signin');
  }
  signup() {
    this.globalService.navigate('signup');
  }
}
