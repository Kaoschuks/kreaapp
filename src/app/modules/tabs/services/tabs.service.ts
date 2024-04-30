import { Injectable, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { messages } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  globals: GlobalsServices = inject(GlobalsServices);
  canOnboard: boolean = false;
  messages: any[] = messages
  
  onModalClosed(event: any) {

  }

  constructor() { }
}
