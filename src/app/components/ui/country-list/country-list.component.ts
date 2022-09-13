import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  @Input() lang: string = 'NG';
  @Input() filterText: string;
  languages: Array<Object> = environment.languages;
  constructor() { }

  ngOnInit() {}

}
