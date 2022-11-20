import { Component, EventEmitter, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'onboarding-swiper',
  templateUrl: './onboarding-swiper.component.html',
  styleUrls: ['./onboarding-swiper.component.scss'],
})
export class OnboardingSwiperComponent implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;
  @ViewChild('textCont', { static: true }) textCont: ElementRef;
  @Output() public toolbarText = new EventEmitter<any>();
  public dir: string;

  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
  }

  slideImages: any = [
    'assets/onboarding/intro-slider1.svg',
    'assets/onboarding/intro-slider2.svg'
  ];

  slideTexts: any = [
    '<h1 class="fs-32 ion-text-wrap line-height-base">Managing your<br> money is about to <br>get a lot better.</h1>',
    '<h1 class="fs-32 ion-text-wrap line-height-base">Spend smarter<br> every day, all from <br> one app.</h1>'
  ];

  constructor() { }

  ngOnInit() {
    this.dir = document.dir;
  }

  onSlideChange(swiper: any) {
    this.toolbarText.emit(this.swiper.swiperRef.activeIndex);
    this.textCont.nativeElement.innerHTML = this.slideTexts[this.swiper.swiperRef.activeIndex];
    if (swiper[0].isBeginning) {
      this.swiper.swiperRef.allowSlidePrev = false;
      this.swiper.swiperRef.allowSlideNext = true;
    } else if (swiper[0].isEnd) {
      this.swiper.swiperRef.allowSlidePrev = true;
    } else {
      this.swiper.swiperRef.allowSlideNext = true;
      this.swiper.swiperRef.allowSlidePrev = true;
    }
  }

  ngAfterContentChecked() {
    if (this.swiper) this.swiper.updateSwiper({});
  }

  nextSlide() {
    this.swiper.swiperRef.slideNext();
  }

  prevSlide() {
    this.swiper.swiperRef.slidePrev();
  }

}
