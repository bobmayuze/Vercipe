import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.css']
})
export class DetailBoardComponent implements OnInit {
	title: string = null;
	creator: string = null;
	creator_email: string = null;
	materials: string[] = null;
	instructions: string = null;
	version: number = null;
	created_at: Date = null;

  constructor(private service: RecipeService) { }

  ngOnInit() {
  	this.getRecipeById('5a9df6c3d0d4270012f1b06b')
  }

  renderRecipe(recipe) {
  	this.title = recipe['title'];
    this.creator = recipe['creator'];
    this.creator_email = recipe['creator_email'];
    this.materials = recipe['materials'];
    this.instructions = recipe['instructions'];
    this.version = recipe['version'];
    this.created_at = recipe['created_at'];
  }

  testService() {
  	this.service.testService().subscribe(data => {
  		this.title = data['msg'];
  	})
  }

  getRecipeById(id: String) {
  	this.service.getRecipeById(id).subscribe(data => {
  		console.log(data);
  		this.renderRecipe(data);
  	})
  }

  getRecipeByEmail(email: String) {
  	this.service.getRecipeByEmail(email)
  }
  // move to other component
  // getRecipesAll(title) {
  // 	this.service.getRecipeByTitle(title)
  // }

  deleteRecipe(id) {
  	this.service.deleteRecipe(id)
  }
  // to implement in the future
  // cloneRecipe() {
  // 	return this.service.cloneRecipe()
  // }

}
