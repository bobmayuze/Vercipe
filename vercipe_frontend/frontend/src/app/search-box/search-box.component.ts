import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private router: Router) { }

  getResults = () => {
    this.router.navigateByUrl('/recipes');
  }

  getResultsByTitle = (title: string) => {
    console.log(`Getting info about ${title}`);
    this.router.navigateByUrl(`/recipes/${title}`);
  }

  createNewRecipe = () => {
    this.router.navigateByUrl('/create');
  }

    ngOnInit() {
  }

}
