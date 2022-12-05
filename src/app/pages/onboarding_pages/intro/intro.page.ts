import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';

import { OnboardingSwiperComponent } from 'src/app/components/onboarding/onboarding-swiper/onboarding-swiper.component';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {

  // @ViewChild('getStarteddiv') getStarteddiv: ElementRef;
  // @ViewChild('btnCont') btnCont: ElementRef;
  // @ViewChild(OnboardingSwiperComponent) swiper !: OnboardingSwiperComponent;
  
  constructor(
    private globals: GlobalsServices
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // this.getStarteddiv.nativeElement.style.display = 'none';
    // this.btnCont.nativeElement.style.display = 'block';
    }

  // nextSlide() {
  //   this.swiper.nextSlide();
  // }

  changefooterContent(swiper: any) {
    // if(swiper == 'beginning'){
    //   this.getStarteddiv.nativeElement.style.display = 'none';
    //   this.btnCont.nativeElement.style.display = 'block';
    // }else if (swiper == 'end'){
    //   this.getStarteddiv.nativeElement.style.display = 'block';
    //   this.btnCont.nativeElement.style.display = 'none';
    // }else if (swiper == 'between'){
    //   this.getStarteddiv.nativeElement.style.display = 'none';
    //   this.btnCont.nativeElement.style.display = 'block';
    // }
  }

  /* Opens modal for user role,*/

  getStarted(page: any) {
    this.globals.openModal(FullModalPage, {
      page: page,
    }, 100, false)
  }

}
