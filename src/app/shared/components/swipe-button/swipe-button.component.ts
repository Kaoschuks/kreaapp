import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'swipe-button',
  templateUrl: './swipe-button.component.html',
  styleUrls: ['./swipe-button.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SwipeButtonComponent {

  @ViewChild('swipeButton', { read: ElementRef }) swipeButton!: ElementRef;
  @Input() color = 'primary';
  @Input() text = 'SLide to Proceed';

  swipeInProgress = false;
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
      this.swipeButton.nativeElement.style.transform = `translateX(${this.translateX}px)`;
    }
  }

  @HostListener('touchend', ['$event'])
  async onTouchEnd(event: TouchEvent) {
    if(this.translateX == this.colWidth) {
      this.text = 'Swiped';
      this.color = 'success';
      await this.delay(800);
      this.text = 'Swipe';
      this.color = 'primary';
    }
    this.swipeInProgress = false;
    this.swipeButton.nativeElement.style.transform = 'translateX(0)';
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
