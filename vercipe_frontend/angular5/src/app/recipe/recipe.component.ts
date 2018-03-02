import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
