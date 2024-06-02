import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[longPress]',
  standalone: true
})
export class LongPressDirective {
  @Output() longpress = new EventEmitter<void>();

  private longPressTimeout: any;
  private readonly longPressDuration = 500; // Duration in ms
  private pressing: boolean = false;
  private moved: boolean = false;

  constructor() {}

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onPressStart(event: Event): void {
    this.pressing = true;
    this.moved = false;
    this.longPressTimeout = setTimeout(() => {
      if (this.pressing && !this.moved) {
        this.longpress.emit();
      }
    }, this.longPressDuration);
  }

  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  onPressMove(event: Event): void {
    this.moved = true;
  }

  @HostListener('touchend')
  @HostListener('touchcancel')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  onPressEnd(): void {
    this.pressing = false;
    clearTimeout(this.longPressTimeout);
  }
}
