import { Component, OnInit } from '@angular/core';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private globalsServices: GlobalsServices) { }

  ngOnInit() {
    this.globalsServices.sidebar  = false;
    this.chooseLanguages();
  }

  chooseLanguages() {
    this.globalsServices.openModal(FullModalPage, {
      page: 'country-list',
      searchText: 'Nigeria'
    })
  }

}
