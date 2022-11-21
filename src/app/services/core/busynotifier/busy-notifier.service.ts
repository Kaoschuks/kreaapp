import { Injectable } from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BusyNotifierService {

  busy:BehaviorSubject<boolean>;
  formBtnLoading: any = new BehaviorSubject(false);

  constructor() { 
  this.busy = new BehaviorSubject<boolean>(false);
  this.busy.next(false);
  }


  /**
  * It returns the value of the formBtnLoading property
  * @returns The value of the formBtnLoading BehaviorSubject.
  */
  get isFormLoading(): boolean {
    return this.formBtnLoading.value;
  }
  
}
