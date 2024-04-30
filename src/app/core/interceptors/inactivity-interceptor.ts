import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { GlobalsServices } from '..';

@Injectable()
export class InactivityInterceptor implements HttpInterceptor {

  private lastActivityTimestamp: number = 0;
  private inactivityThreshold = 60000; // 1 minute in milliseconds
  private inactivitySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private globals: GlobalsServices = inject(GlobalsServices);

  constructor() {
    this.resetTimer();
    this.setupActivityTracking();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.userActivityDetected(); 
    return next.handle(request).pipe(
      tap(async () => {
        this.getInactivityStatus().subscribe(async (status: any) => {
          // if(status == true) await this.globals.toastAlert("inactivity detected");alert()
        })
        }, (err: any) => {   
            console.log(err)
        })
    );
  }

  private resetTimer() {
    this.lastActivityTimestamp = Date.now();
  }

  private setupActivityTracking() {
    timer(0, 1000).pipe(
      switchMap(() => timer(0, 1000).pipe(map(() => Date.now() - this.lastActivityTimestamp)))
    ).subscribe(inactivityDuration => {
      if (inactivityDuration >= this.inactivityThreshold) {
        this.inactivitySubject.next(true);
      } else {
        this.inactivitySubject.next(false);
      }
    });
  }

  private getInactivityStatus() {
    return this.inactivitySubject.asObservable();
  }

  private userActivityDetected() {
    this.resetTimer();
  }
}


