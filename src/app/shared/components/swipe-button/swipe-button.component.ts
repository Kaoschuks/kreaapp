import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonCol, IonFabButton, IonIcon, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-swipe-button',
  templateUrl: './swipe-button.component.html',
  styleUrls: ['./swipe-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonFabButton, IonCol, IonRow, IonButton, IonText, IonIcon, NgClass, IonButtons],
})
export class SwipeButtonComponent {

  @ViewChild('swipeButton', { read: ElementRef }) swipeButton!: ElementRef;
  @Input() color = 'medium';
  @Input() isRounded: boolean = false;
  @Input() text = 'Slide to Proceed';

  swipeInProgress: boolean = false;
  colWidth!: number;
  translateX!: number;


  constructor() {
    addIcons({ 
      "chevron-forward-outline": chevronForwardOutline
    });
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.swipeInProgress = true;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.swipeInProgress) {
      const deltaX = event.touches[0].clientX;
      this.colWidth = this.swipeButton.nativeElement.parentElement.clientWidth;
      this.translateX = Math.min(deltaX, this.colWidth);
      const minus: number = (this.isRounded == true) ? 50 : 90
      this.swipeButton.nativeElement.style.transform = `translateX(${this.translateX - minus}px)`;
    }
  }

  @HostListener('touchend', ['$event'])
  async onTouchEnd(event: TouchEvent) {
    if(this.translateX == this.colWidth) {
      this.text = 'Swiped';
      this.color = 'success';
      await this.delay(800);
      this.text = 'Slide to Proceed';
      this.color = 'medium';
    }
    this.swipeInProgress = false;
    this.swipeButton.nativeElement.style.transform = 'translateX(0)';
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
