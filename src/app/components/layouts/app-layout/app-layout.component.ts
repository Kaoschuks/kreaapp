import { Component, Input, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {

  constructor(
    public _globals:  GlobalsServices,
  ) {
  }

  ngOnInit() {
  }

}
