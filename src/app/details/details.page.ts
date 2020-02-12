import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: {name: string, email: string, phone: number, dob: Date};
  constructor(private router: Router) { }

  ngOnInit() {
    // this.data = {
    //   name: 'Akash',
    //   phone: 12345678,
    //   email: 'akash.mhatre@spit.ac.in',
    //   dob: '28-07-1997'
    // }

    const navigation = this.router.getCurrentNavigation();
    this.data = navigation.extras.state as {
      name: string;
      email: string;
      phone: number;
      dob: Date;
    };

    console.log(this.data);
  }

}
