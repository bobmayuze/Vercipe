import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(
    private recipeSevice: RecipeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  recipes = null;
  versionResult: any = {} ;

  getRecipes(): void {
    const keyWord: string = this.route.snapshot.paramMap.get('title');
    console.log(keyWord);
    if (keyWord === null) {
      this.recipeSevice.getRecipesAll()
        .subscribe(recipes => this.recipes = recipes);
    } else {
      console.log(`We need ${keyWord}`);
      this.recipeSevice.getRecipeByTitle(keyWord)
        .subscribe(recipes => this.recipes = recipes);
    }
  }

  getRecipeDetail(id: string): void {
    console.log(`Getting....${id}`);
    this.router.navigateByUrl(`detail/${id}`);
  }

  ngOnInit() {
    this.getRecipes();
  }

}
