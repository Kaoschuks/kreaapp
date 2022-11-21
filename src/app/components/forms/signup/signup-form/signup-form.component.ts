import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

import { PasswordValidators } from 'src/app/helpers/password-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  
  public password_visible: boolean = false;
  
  @Output() public emailEvent = new EventEmitter<any>();

  emailForm: FormGroup;
  submitted = false;
  emailvalid = false;
  
  constructor( ) { }

  ngOnInit() {
    // this.emailForm = this.formBuilder.group({
    //       email: ['', [Validators.required, Validators.email]]
    // });
  }

  signupForm = new FormGroup(
    {
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
            requiresDigit: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
            requiresUppercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
            requiresLowercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
            requiresSpecialChars: true
          })
        ])
      ),
      password2: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    },
    {
      validators: PasswordValidators.MatchValidator
    }
  );

  // form field getter
  get f() { return this.signupForm.controls; }

  get passwordValid() {
    return this.signupForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.signupForm.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.signupForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.signupForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.signupForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.signupForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.signupForm.controls["password"].hasError("requiresSpecialChars");
  }

  toggleVisibility() {
    this.password_visible = (this.password_visible) ? false : true;
  }

  signupEmail() {
    this.submitted = true;
      if(this.signupForm.invalid) { 
        return;
      } else {
        this.emailvalid = true;
        //this.emailEvent.emit({email: this.emailForm.value, submitted: this.submitted, emailvalid: this.emailvalid});
        console.log(JSON.stringify(this.signupForm.value));
      }
  }

}
