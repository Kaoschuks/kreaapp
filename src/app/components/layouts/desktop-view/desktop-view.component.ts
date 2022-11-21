import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss'],
})
export class DesktopViewComponent implements OnInit {

  constructor(
    public _globals:  GlobalsServices,
  ) {
    this._globals.sidebar = true;
  }

  ngOnInit() {
  }

}
