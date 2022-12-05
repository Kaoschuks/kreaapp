import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { formatDate } from '@angular/common';
import { GlobalsServices } from 'src/app/services/core/globals';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public submitted: boolean = false;
  public userinfovalid: boolean = false;

  @Output() public userInfoEvent = new EventEmitter();
  @Input() public userData: any[] = [];
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Ghana, CountryISO.Nigeria];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.Nigeria, CountryISO.Ghana];
	}

  constructor(
    private _globals: GlobalsServices
    ) { }

  ngOnInit() {
    this.userInfoForm.controls['first_name'].setValue(this.userData[0]?.first_name);
    this.userInfoForm.controls['last_name'].setValue(this.userData[0]?.last_name);
    this.userInfoForm.controls['DOB'].setValue(formatDate(this.userData[0]?.dob,'yyyy-MM-dd','en'));
    this.userInfoForm.controls['SSN'].setValue(this.userData[0]?.ssn);

  }

  userInfoForm = new FormGroup(
    {
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      DOB: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      phone: new FormControl(undefined, [Validators.required]),
      SSN: new FormControl(null, [Validators.required])
    }
  );

  // form field getter
  get f() { return this.userInfoForm.controls; }


  userInfoSubmit() {
    this.submitted = true;
      if(this.userInfoForm.invalid) { 
        return;
      } else {
        this.userinfovalid = true;
        const userInfo = <any>{
            first_name: this.userInfoForm.value.first_name,
            last_name: this.userInfoForm.value.last_name,
            DOB: this.userInfoForm.value.DOB,
            gender: this.userInfoForm.value.gender,
            SSN: this.userInfoForm.value.SSN,
            submitted: true
        }
        this.userInfoEvent.emit({userInfo});
        //console.log(JSON.stringify(userInfo));
      }
  }


}
