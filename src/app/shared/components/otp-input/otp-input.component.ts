import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CodeInputComponent, CodeInputModule } from "angular-code-input";

@Component({
  selector: 'otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CodeInputModule,
  ]
})
export class OtpInputComponent implements AfterViewInit {
  @Input() clearInput!: boolean
  @Output() onCompleted = new EventEmitter<any>();

  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  ngAfterViewInit(): void {
    this.codeInput?.reset()
  }
}
