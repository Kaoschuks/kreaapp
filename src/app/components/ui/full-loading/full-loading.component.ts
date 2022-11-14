import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-full-loading',
  templateUrl: './full-loading.component.html',
  styleUrls: ['./full-loading.component.scss'],
})
export class FullLoadingComponent implements OnInit {

  constructor(public globals: GlobalsServices) {}

  ngOnInit() {}

}
