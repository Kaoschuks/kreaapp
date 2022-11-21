import { Component, Input, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'subpage-layout',
  templateUrl: './subpage-layout.component.html',
  styleUrls: ['./subpage-layout.component.scss'],
})
export class SubpageLayoutComponent implements OnInit {

  @Input() page: string;
  @Input() back: string;
  @Input() headerColor: string = 'bg-primary';
  @Input() textColor: string = 'text-white';
  constructor(
    public _globals:  GlobalsServices) { }

  ngOnInit() {
    if(this._globals.platform.is('capacitor')) {
      StatusBar.setBackgroundColor({
        color: '#1a638f'
      })
      StatusBar.setStyle({
        style: Style.Dark
      })
    }
  }
  
  goBack(): void {
    this._globals.location.back()
  }

}
