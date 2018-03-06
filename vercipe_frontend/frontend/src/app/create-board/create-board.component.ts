import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
