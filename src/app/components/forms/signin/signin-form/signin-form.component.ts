import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {

  public password_visible: boolean = false;
  submitted = false;
  formvalid = false;

  @Output() public formEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  signinForm = new FormGroup(
    {
       email: new FormControl(null, [Validators.email, Validators.required]),
       password: new FormControl(null,[Validators.required])
    }
  );

 // form field getter
  get f() { return this.signinForm.controls; } 

  signFunc() {
    this.submitted = true;
      if(this.signinForm.invalid) { 
        return;
      } else {
        this.formvalid = true;
        this.formEvent.emit({email: this.signinForm.value.email, password: this.signinForm.value.password, submitted: this.submitted, formvalid: this.formvalid});
        console.log(JSON.stringify(this.signinForm.value));
      }
  }

  toggleVisibility() {
    this.password_visible = (this.password_visible) ? false : true;
  }

}
