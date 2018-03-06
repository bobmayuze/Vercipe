import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
	private url:String = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  createRecipe(json) {
  	return this.http.post(this.url + 'newRecipe', json)
  }

  getAllRecipes() {
  	return this.http.get(this.url + 'allRecipess')
  }

  getRecipeById(id) {
  	return this.http.post(this.url + 'recipes', {id : id})
  }

  getRecipeByEmail(email) {
  	return this.http.post(this.url + 'recipes/byMail', {email: email})
  }

  getRecipeByTitle(title) {
  	return this.http.post(this.url + 'recipes/byTitle', {title: title})
  }

  deleteRecipe(id) {
  	return this.http.delete(this.url + 'recipes', { params: {id : id} })
  }

  cloneRecipe() {

  }
}
