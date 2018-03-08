import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(
    private recipeSevice: RecipeService
  ) { }

  recipes = null;

  getRecipes(): void {
    this.recipeSevice.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  getRecipeDetail(content: string): void {
    console.log(`Getting....${content}`);
  }

  ngOnInit() {
    this.getRecipes();
  }

}
