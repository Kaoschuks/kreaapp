import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  public userData: Array<any> = [
    {
      profile: [
        {
          first_name: "Dylan",
          last_name: "Robinson",
          dob: "05/28/1992",
          ssn: "8349"
        }
      ],
      address: [
        {
          street_address: "428 Greenwich Ave",
          apt_suit_number: "29A",
          city: "Brooklyn",
          state: "New York",
          zipcode: "11239"
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
