import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonFabButton, IonSpinner, Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
  standalone: true,
  imports: [
    IonFabButton, IonSpinner
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashscreenComponent  implements OnInit {
  
  @Input() useImage: boolean = true
  @Input() bgColor: string = 'bg-white'
  constructor(
    public plt: Platform
  ) { }

  ngOnInit() {}
}
