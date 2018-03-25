import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private recipeSevice: RecipeService
  ) { }
  
  private recipes = 
    [
      {
	    "id": 1234,
	    "title": "Baked Chicken",
        "creator": "Fred",
  	    "creator_Email": "red",
	    "materials": ["Apples", "Chicken"],
	    "instructions": ["Cut the apples","bake the chicken"],
	    "created_at": 1521725976,
	    "version": 1,
	    "previous_version": ""
      },
      {
	    "id": 1234,
	    "title": "Baked Chicken",
        "creator": "Fred",
  	    "creator_Email": "red",
	    "materials": ["Apples", "Chicken"],
	    "instructions": ["Cut the apples","bake the chicken"],
	    "created_at": 1521725976,
	    "version": 1,
	    "previous_version": ""
      },
      {
	    "id": 1234,
	    "title": "Baked Chicken",
        "creator": "Fred",
  	    "creator_Email": "red",
	    "materials": ["Apples", "Chicken"],
	    "instructions": ["Cut the apples","bake the chicken"],
	    "created_at": 1521725976,
	    "version": 1,
	    "previous_version": ""
      }
    ];

  /* getRecipes(): void {
    this.recipes = null;
    this.recipeSevice.getRecipeByEmail("email")
      .subscribe(recipes => this.recipes = recipes);
  } */

  ngOnInit() {
    //this.getRecipes();
  }
  
  testit(): void {
    alert("here");
    alert(this.recipes);
    console.log(this.recipes);
  }

}
