import { NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialIntlTelInputComponent } from 'ngx-material-intl-tel-input'

@Component({
  selector: 'phonenumber-input',
  templateUrl: './phonenumber-input.component.html',
  styleUrls: ['./phonenumber-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgxMaterialIntlTelInputComponent,
    FormsModule, ReactiveFormsModule
  ]
})

export class PhonenumberInputComponent {
	@Input() controlName!: AbstractControl<string>;
	@Input() isRequired: boolean = false;
	@Input() isDisabled: boolean = true;
	@Input() canSearch: boolean = true;
	@Output() onInput = new EventEmitter();

  form = this.fb.group({
    phone: [''],
  });

  constructor(
    private fb: FormBuilder
  ){}

  onInputChange(value: string) {
    this.onInput.emit(value)
  }
}
