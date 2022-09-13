import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    private location: Location, 
    private globalService: GlobalsServices
  ) { }

  ngOnInit() {}
  
  back() {
    this.location.back();
  }
  signup() {
    this.globalService.navigate('auth/signup');
  }

}
