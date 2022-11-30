import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonImg } from '@ionic/angular';
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
  @ViewChild('bgImg') bgImg: IonImg;
  @Output() public footerContent = new EventEmitter<string>();

  public dir: string;

  ngAfterViewInit() {}

  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
  }

  slideImages: any = [
    'assets/onboarding/intro-slider1.svg',
    'assets/onboarding/intro-slider2.svg',
    'assets/onboarding/intro-slider1.svg',
    'assets/onboarding/intro-slider2.svg'
  ];

  constructor() {}

  ngOnInit() {
    this.dir = document.dir;
  }
  

  onSlideChange(swiper: any) {
    this.bgImg.src = this.slideImages[this.swiper.swiperRef.activeIndex];
    if (swiper[0].isBeginning) {
      this.swiper.swiperRef.allowSlidePrev = false;
      this.swiper.swiperRef.allowSlideNext = true;
      this.footerContent.emit('beginning');
    } else if (swiper[0].isEnd) {
      this.footerContent.emit('end');
      this.swiper.swiperRef.allowSlidePrev = true;
    } else {
      this.footerContent.emit('between');
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
