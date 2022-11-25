import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private globalsServices: GlobalsServices) { 
    if(this.globalsServices.platform.is('capacitor')) {
      StatusBar.setBackgroundColor({
        color: '#1a638f'
      })
      StatusBar.setStyle({
        style: Style.Dark
      })
    }
  }

  ngOnInit() {
    this.simulateGettingProfileDate();
    this.globalsServices.sidebar  = false;
    this.globalsServices.openModal(FullModalPage, {
      page: 'complete-setup',
    }, 100, true)
  }

  simulateGettingProfileDate() {
    // alert(this.globalsServices.platform.is('android'));
    // this.globalsServices.spinnerText = 'Getting your data ready';
    // this.globalsServices.spinner.show();
    setTimeout(() => {
      // this.globalsServices.spinner.hide();
    }, 5000);
  }


}
