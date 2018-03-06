import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	title:String = null
	creator:String = null
	creator_email:String = null
	materials:String[] = null
	instructions: String = null
	version:Number = null
	created_at:Date = null

  constructor(private service: RecipeService) {
  	// this.testService()
  }

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
  		// console.log(data['msg'])
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
