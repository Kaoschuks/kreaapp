import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ComponentsModule,
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
