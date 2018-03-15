import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from './recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  testService() {
    return this.http.get(this.url);
  }

  createRecipe(json) {
    return this.http.post(this.url + 'newRecipe', json);
  }

  getRecipesAll() {
    return this.http.get(this.url + 'allRecipes');
  }

  getRecipeById(id) {
    return this.http.post(this.url + 'recipes', {id : id});
  }

  getRecipeByEmail(email) {
    return this.http.post(this.url + 'recipes/byMail', {email: email});
  }

  getRecipeByTitle(title) {
    return this.http.post<Recipe[]>(this.url + 'recipes/byTitle', {title: title});
  }

  deleteRecipe(id) {
    return this.http.delete(this.url + 'recipes', { params: {id : id} });
  }
  // to implement in the future
  // cloneRecipe() {
  // 	return this.http.post()
  // }

  getAllRecipes() {
    return this.http.get<Recipe[]>(this.url + 'allRecipes');
  }
}
