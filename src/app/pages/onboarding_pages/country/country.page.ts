import { Component, OnInit } from '@angular/core';
import { HalfModalPage } from 'src/app/modals/half-modal/half-modal.page';
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
    this.globals.openModal(HalfModalPage, {
      page: page,
    }, 99, false)
  }

}
