import { Injectable, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class ApppageService {
  globals: GlobalsServices = inject(GlobalsServices);
  canOnboard: boolean = false;
  
  onModalClosed(event: any) {

  }

  constructor() { }
}
