import { Component, Input, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit {

  @Input() link: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() description: string;

  constructor(private globalsServices: GlobalsServices) { }

  ngOnInit() {
    this.globalsServices.sidebar  = false;
  }

}
