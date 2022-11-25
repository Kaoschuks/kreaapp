import { Component } from '@angular/core'
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';
import { environment } from 'src/environments/environment'
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chartLabels: any;

  chartData = [
      {
        "name": "Balance",
        "value": 2000
      },
      {
        "name": "Expenses",
        "value": 1200
      }
    ];

    investment: any = [
      {
        name: "Get a loan",
        note: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
        icon: "",
        bgcolor: "#222428",
        color: "#ffffff"
      },
      {
        name: "Make purchase",
        note: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
        icon: "",
        bgcolor: "#4854e0",
        color: "#ffffff"
      },
      {
        name: "Offers",
        note: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
        icon: "",
        bgcolor: "#f4f5f8",
        color: "#ffffff"
      }
    ];

  currencies: any = environment.currencies
  curr_currency: any = 'NGN'
  type: any = 'text'
  slideOpts: SwiperOptions = {
    slidesPerView: 1.5,
    pagination: false,
  }
  
  constructor(private globals: GlobalsServices) {}

  ngOnInit() {
  }

  changecurrency(curr){
    console.log(curr)
  }

  // openmodal(page = 'pin') {
  //   this.globals.openModal(FullModalPage, {
  //     page: page,
  //   }, 100, page == 'complete-setup' || page == 'invite')
  // }
  
}
