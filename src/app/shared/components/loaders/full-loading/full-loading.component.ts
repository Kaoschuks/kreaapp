import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonProgressBar } from '@ionic/angular/standalone';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-full-loading',
  templateUrl: './full-loading.component.html',
  styleUrls: ['./full-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonProgressBar, NgxSpinnerModule, TitleCasePipe
  ]
})
export class FullLoadingComponent {

  @Input() text: string= ''
  constructor() {}

}
