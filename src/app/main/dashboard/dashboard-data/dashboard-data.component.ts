import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss'],
})
export class DashboardDataComponent implements OnInit {
  @Input() iconName;
  @Input() title;
  constructor() { }

  ngOnInit() {}

}
