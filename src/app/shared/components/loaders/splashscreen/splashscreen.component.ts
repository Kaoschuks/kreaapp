import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonFabButton, IonSpinner, Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonFabButton, IonSpinner
  ],
})
export class SplashscreenComponent {
  
  @Input() useImage: boolean = true
  @Input() bgColor: string = 'bg-white'

  constructor(
    public plt: Platform
  ) { }
}
