import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  private title: string;
  private instructs: string[] = [``];
  private materials: string[] = [``];

  constructor(
    private location: Location,
    private recipeSevice: RecipeService
  ) { }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  addStep(): void {
    this.instructs.push(``);
  }

  remStep(): void {
    this.instructs.pop();
  }

  addMat(): void {
    this.materials.push(``);
  }

  remMat(): void {
    this.materials.pop();
  }

  submit(): void {

    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));

    if (loginFlag === `null`) {
      alert(`Please Login First`);
    } else {
      const user: any = JSON.parse(sessionStorage.getItem(`currentUser`));
      console.log(user[`username`]);
      console.log(user[`email`]);

      const send: any = {};
      send.title = this.title;
      send.creator = user[`username`];
      send.creator_email = user[`email`];
      send.materials = this.materials;
      send.instructions = this.instructs;

      console.log(send);

      this.recipeSevice.createRecipe(send);

      alert(`Submitted`);
    }
  }

}
