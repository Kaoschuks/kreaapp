import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsCardComponent, NewsItemComponent } from './components';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { GlobalsServices } from 'src/app/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NewsCardComponent, NewsItemComponent, 
    ComponentsModule,
  ]
})
export class NewsPage {

  constructor(
    public readonly globals: GlobalsServices
  ) {
  }

}
