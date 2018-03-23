import { Component, OnInit } from '@angular/core';

import { SearchBoxComponent } from '../search-box/search-box.component';
import { AppRoutingModule } from '../app-routing.module'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
