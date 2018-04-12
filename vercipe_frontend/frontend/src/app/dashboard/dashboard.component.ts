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
    private recipeSevice: RecipeService,
    private router: Router
  ) { }

  private recipes;

  getRecipes(useremail): void {
    this.recipes = null;
    this.recipeSevice.getRecipeByEmail(useremail)
      .subscribe((recipes) => {
        console.log(recipes);
        this.recipes = recipes.message;
      });
  }


  async ngOnInit() {
    this.user = await JSON.parse(sessionStorage.getItem(`currentUser`));
    console.log(this.user.email);
    this.getRecipes(this.user.email);

    // this.getRecipes();
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
}
