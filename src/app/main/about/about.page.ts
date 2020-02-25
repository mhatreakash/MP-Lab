import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  imageLink1 = 'https://www.spit.ac.in/wp-content/themes/spit-main/images/red/logo.gif';
  imageLink = 'https://www.spit.ac.in/wp-content/uploads/2009/11/Entrance.jpg';
  constructor() { }

  ngOnInit() {
  }

}
