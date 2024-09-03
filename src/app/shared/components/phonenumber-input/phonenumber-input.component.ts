import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup,  FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-phonenumber-input',
  templateUrl: './phonenumber-input.component.html',
  styleUrls: ['./phonenumber-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule
  ]
})

export class PhonenumberInputComponent {
	@Input() controlName!: AbstractControl<string>;
	@Input() isRequired: boolean = false;
	@Input() isDisabled: boolean = true;
	@Input() canSearch: boolean = true;
	@Output() inputdata = new EventEmitter();

  form!: FormGroup

  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      phone: [''],
    });
  }

  onInputChange(value: string) {
    this.inputdata.emit(value)
  }
}
