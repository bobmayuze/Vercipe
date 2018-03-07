import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  instruct: any[] = ["test1", "test2"];

  materials: any[] = ["mat1", "mat2"];

  /*
  instruct: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  */

  constructor(
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  addStep(): void {
    this.instruct.push("test3");
  }

  remStep(): void {
    this.instruct.pop();
  }

  addMat(): void {
    this.materials.push("mat3");
  }

  remMat(): void {
    this.materials.pop();
  }

}
