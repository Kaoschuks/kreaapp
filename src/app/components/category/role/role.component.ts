import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {

  constructor(
    private _globals: GlobalsServices
  ) { }

  ngOnInit() {}

  closeModal() {
    this._globals.modalCtrl.dismiss();
  }

  async selectedrole(country: string) {
    this.closeModal();
    this._globals.navigate('/signup', false)
  }

}
