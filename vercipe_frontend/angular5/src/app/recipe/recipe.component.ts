import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	recipeTitle: String
	recipeCreator: String
	creatorEmail: String
	materials: String[]
	instructions: String[]
	recipeVersion: Number
	createdAt: Date

  constructor() { 
  	this.recipeTitle = 'Pasta Idiota';
  	this.recipeCreator = 'alima';
  	this.creatorEmail = 'alima@vercipe.io';
  	this.materials = ['Pasta', 'Sauce', 'Idiot'];
  	this.instructions = ['1. Boil Pasta', '2. Cook idiot in sauce', '3. Add pasta to sauce'];
  	this.recipeVersion = 1;
  	this.createdAt = new Date();
  }

  ngOnInit() {

  }

  getRecipe() {
  	this.recipe
  }

}
