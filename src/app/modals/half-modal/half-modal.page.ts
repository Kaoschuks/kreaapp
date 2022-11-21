import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GlobalsServices } from 'src/app/services/core/globals';


@Component({
  selector: 'app-half-modal',
  templateUrl: './half-modal.page.html',
  styleUrls: ['./half-modal.page.scss'],
})
export class HalfModalPage implements OnInit {
  searchText: string = this.params.get('searchText')
  page: string = this.params.get('page')
  components: string = this.params.get('components')

  constructor(
    private _globals: GlobalsServices,
    private params: NavParams
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
