import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit {

  title: string = 'Dashboard'
  constructor(
    public _globals:  GlobalsServices,
  ) {
    this._globals.router.events.subscribe(async (event) => {
      if (event instanceof NavigationStart) {
        if(this._globals.platform.is('capacitor')) {
          StatusBar.setBackgroundColor({
            color: '#1a638f'
          })
          StatusBar.setStyle({
            style: Style.Dark
          })
        }
      }
      if ( event instanceof NavigationEnd || event instanceof NavigationCancel ) {
        this.title = event.url.split('/')[2];
      }
    });
  }

  ngOnInit() {
  }

  openmodal(page = 'pin') {
    this._globals.openModal(FullModalPage, {
      page: page,
    }, 100, false)
  }

}
