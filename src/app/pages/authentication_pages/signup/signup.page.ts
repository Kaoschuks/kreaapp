import { Component, OnInit } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private globalService: GlobalsServices) { }

  ngOnInit() {}
  signin() {
    this.globalService.navigate('signing');
  }
}
