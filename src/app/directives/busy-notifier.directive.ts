import { Directive, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusyNotifierService } from '../services/core/busynotifier/busy-notifier.service';

@Directive({
  selector: '[appBusyNotifier]'
})
export class BusyNotifierDirective {
  @Input() showDelay: number = 50;
  @Input() hideDelay: number = 1000;
  hideTimer: Subscription;
  showTimer: Subscription;

  constructor(private el: ElementRef, private abns: BusyNotifierService) { 
  }

  ngOnInit() {
    this.abns.busy.subscribe((busy) => {
      //console.log(busy);
      if (busy) {
        this.el.nativeElement.style.display = 'block';
        // If a show is already pending, don't start a new one.
      }else{
        this.el.nativeElement.style.display = 'none';
      }
    });
  }

}
