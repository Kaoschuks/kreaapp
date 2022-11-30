import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-full-modal',
  templateUrl: './full-modal.page.html',
  styleUrls: ['./full-modal.page.scss'],
})
export class FullModalPage implements OnInit, AfterViewInit {

  page: string = this.params.get('page')
  
  constructor(
    private _globals: GlobalsServices,
    private params: NavParams
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {}

  closeModal() {
    this._globals.modalCtrl.dismiss();
  }

}
