import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GlobalsServices } from 'src/app/core';
import { OtpInputComponent } from 'src/app/shared/components/otp-input/otp-input.component';
import { BarChartComponent, CircleProgressModule, DonutChartComponent, GuageChartComponent, HorizontalBarChartComponent, LineChartComponent, LoadingComponent, MobileHeaderComponent, PhonenumberInputComponent, RadarChartComponent, SwipeButtonComponent } from 'src/app/shared/components';
import { CircleProgressComponent } from 'src/app/shared/components/charts/circle-progress/circle-progress.component';
import { IonCardContent } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MobileHeaderComponent,
    LoadingComponent, AsyncPipe, NgIf,
    IonicModule, CommonModule, OtpInputComponent, SwipeButtonComponent, 
    IonCardContent,
    GuageChartComponent, BarChartComponent, CircleProgressModule, CircleProgressComponent, DonutChartComponent, LineChartComponent, RadarChartComponent, HorizontalBarChartComponent,
    PhonenumberInputComponent,
  ]
})
export class HomePage {

  isLoading = new BehaviorSubject<boolean>(true);
  constructor(
    public globals: GlobalsServices
  ) {
  }

  ionViewWillEnter() {
    this.isLoading.next(true)
    setTimeout(() => {
      this.isLoading.next(false)
    }, 3000);
  }

}
