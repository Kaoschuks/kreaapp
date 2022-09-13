import { Component } from '@angular/core';
import { GlobalsServices } from './services/core/globals';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public doneLoading: boolean = true;
  pages: any = environment.pages

  constructor(
    public _globals:  GlobalsServices,
  ) {
    this.initApp();
  }

  private async initApp() {
    const [resp, error] = await this._globals.platform.ready()
    if(error) {
      console.log("App platform running error", error)
    }
    if(resp) {
      setTimeout(() => { 
        this.doneLoading = false; 
      }, 1500);
    }
  }

}
