import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	title:String = "not implemented"
	creator:String
	creator_email:String
	material:String[]
	instructions: String
	version:Number
	created_at:Date

  constructor(private service: RecipeService) {
  	// this.testService()
  }

  ngOnInit() {
  	this.testService()
  	this.getRecipeById('5a9df6c3d0d4270012f1b06b')
  }

  renderRecipe(recipe) {
  	// this.
  }

  testService() {
  	this.service.testService().subscribe(data => {
  		// console.log(data['msg'])
  		this.title = data['msg']
  	})
  }

  getRecipeById(id: String) {
  	this.service.getRecipeById(id).subscribe(data => {
  		console.log(data)
  		// renderRecipe(data)
  	})
  }

  getRecipeByEmail(email: String) {
  	this.service.getRecipeByEmail(email)
  }

  getRecipesAll(title) {
  	this.service.getRecipeByTitle(title)
  }

  deleteRecipe(id) {
  	this.service.deleteRecipe(id)
  }
  // to implement in the future
  // cloneRecipe() {
  // 	return this.service.cloneRecipe()
  // }

}
