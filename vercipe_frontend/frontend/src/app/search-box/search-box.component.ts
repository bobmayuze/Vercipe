import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private router: Router) { }

  getResultsByTitle = (title: string) => {
    if (title) {
      console.log(`Getting info about ${title}`);
      this.router.navigateByUrl(`/recipes/${title}`);
    } else {
      this.router.navigateByUrl('/recipes');
    }
  }

  createNewRecipe = () => {
    this.router.navigateByUrl('/create');
  }

  findUserRecipes = () => {
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
  }

}
