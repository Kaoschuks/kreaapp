import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  @Input() country: string;
  @Input() filterText: string;
  @Output() public countrySelected = new EventEmitter<any>();
  countries: Array<Object> = environment.countries;
  constructor() { }

  ngOnInit() {}

  countryChange(event) {
    this.countrySelected.emit(event.target.value);
  }

}
