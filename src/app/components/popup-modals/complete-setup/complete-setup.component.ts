import { Component, OnInit } from '@angular/core';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'complete-setup',
  templateUrl: './complete-setup.component.html',
  styleUrls: ['./complete-setup.component.scss'],
})
export class CompleteSetupComponent implements OnInit {
  
  constructor(private globals: GlobalsServices) {}

  ngOnInit() {}

  openmodal(page = 'pin') {
    this.globals.modalCtrl.dismiss();
    this.globals.openModal(FullModalPage, {
      page: page,
    }, 100)
  }

}
