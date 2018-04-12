import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(
    private recipeService: RecipeService,
    private router: Router
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
    this.user = JSON.parse(sessionStorage.getItem(`currentUser`));
    //this.getRecipes();
  }

  testit(): void {
    alert(this.recipes);
    console.log(this.recipes);
  }
  logout(): void {
    alert(`Successfully Logged Out!`);
    sessionStorage.clear();
    this.router.navigateByUrl(`/`);
  }
  copy(recipe): void {
    this.recipeService.setCopy(recipe);
    this.recipeService.setCopyExists(true);
    this.router.navigateByUrl('/create');
  }
}
