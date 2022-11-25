import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { HalfModalPage } from 'src/app/modals/half-modal/half-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  // @ViewChild(IonContent, { static: false }) private content: IonContent; 

  constructor(private globals: GlobalsServices) {}

  ngOnInit() {
    // this.content.scrollToTop(); 
  }

  openmodal(page = 'pin') {
    this.globals.openModal(FullModalPage, {
      page: page,
    }, 100, page == 'complete-setup' || page == 'invite')
  }

  chooseLanguages() {
    this.globals.openModal(HalfModalPage, {
      page: 'country-list',
      searchText: ''
    }, 99, false)
  }

  invite() {
    this.globals.notifyAlert(
      '',
      ''
    );
  }

}
