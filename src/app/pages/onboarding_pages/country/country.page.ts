import { Component, OnInit } from '@angular/core';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {

  constructor(
    private globals: GlobalsServices
  ) { }

  ngOnInit() {
  }

  openmodal(page = 'country-list') {
    this.globals.openModal(FullModalPage, {
      page: page,
    }, 100, false)
  }

}
