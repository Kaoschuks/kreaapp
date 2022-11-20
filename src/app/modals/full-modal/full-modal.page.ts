import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-full-modal',
  templateUrl: './full-modal.page.html',
  styleUrls: ['./full-modal.page.scss'],
})
export class FullModalPage implements OnInit {

  searchText: string = ''
  constructor(
    private _globals: GlobalsServices
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this._globals.modalCtrl.dismiss();
  }

  async countrySelected(country: string) {
    this.closeModal();
    this._globals.navigate('/intro', false)
  }
}
