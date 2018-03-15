import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  title = "";
  name = "";
  email = "";
  
  instructs: String[] = [""];

  materials: String[] = [""];

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
    private location: Location,
    private http: HttpClient
  ) { }

  trackByIndex(index: number, obj: any): any{
    return index;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  addStep(): void {
    this.instructs.push("");
  }

  remStep(): void {
    this.instructs.pop();
  }

  addMat(): void {
    this.materials.push("");
    //console.log(this.title);
    //console.log(this.name);
    //console.log(this.email);

    //console.log(this.materials);
    //console.log(this.instructs);
  }

  remMat(): void {
    this.materials.pop();
  }

  submit(): void{
    //var send: any[] = [this.title, this.name, this.email, this.materials, this.instructs];
    var send = '{';
    send += '"title": ' + '"' + this.title + '",'
    send += '"name": ' + '"' + this.name + '",'
    send += '"email": ' + '"' + this.email + '",'
    send += '"materials": ['
    for (var i = 0; i<this.materials.length; i++){
      send += '"' + this.materials[i] + '"';
      if (i+1 != this.materials.length){
        send += ',';
      }
    }
    send += '],'

    send += '"instructions": ['
    for (var i = 0; i<this.instructs.length; i++){
      send += '"' + this.instructs[i] + '"';
      if (i+1 != this.instructs.length){
        send += ',';
      }
    }
    send += ']'
    send += "}";
    send = JSON.parse(send);
    //console.log(this.location["_platformStrategy"]["_platformLocation"]["location"]["origin"]);
    //var loc = this.location["_platformStrategy"]["_platformLocation"]["location"]["origin"];
    this.http.post('http://localhost:3000/newRecipe', send).subscribe(
      data => {
        alert('Submitted');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
    //console.log(send);
    //alert("Submitted");
  }

}
