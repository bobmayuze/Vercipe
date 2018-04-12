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
  private url = 'http://52.170.95.42:3000/';
  private data: string;
  private err: string;

  private copy: boolean;
  private cRecipe: Object;

  constructor(private http: HttpClient) { }


  testService() {
    return this.http.get(this.url);
  }

  createRecipe(json) {

    return this.http.post(this.url + 'newRecipe', json).subscribe(
      data => this.data,
      err => this.err
    );
  }

  getRecipesAll() {
    return this.http.get(this.url + 'allRecipes');
  }

  getRecipeById(id) {
    return this.http.post(this.url + 'recipes', {id : id});
  }

  getRecipeByEmail(email): any {
    return this.http.post(this.url + 'users/allRecipes', { creator_email: email});
  }

  getRecipeByTitle(title) {
    return this.http.post<Recipe[]>(this.url + 'recipes/byTitle', {title: title});
  }

  deleteRecipe(id) {
    return this.http.delete(this.url + 'recipes', { params: {id : id} }).subscribe(
      data => this.data,
      err => this.err
    );
  }

  cloneRecipe(id) {
    const user: any = JSON.parse(sessionStorage.getItem(`currentUser`));
    return this.http.post(this.url + 'recipes/forkById', {
      id: id,
      username: user[`username`]
    }).subscribe(
      data => this.data,
      err => this.err
    );
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(this.url + 'allRecipes');
  }

  getVersionsById(targetId: string) {
    return this.http.post(this.url + `recipes/previous/all`, { id : targetId});
  }

  setCopy(cRec: Object) {
    this.cRecipe = cRec;
  }

  getCopy() {
    return this.cRecipe;
  }

  setCopyExists(b: boolean) {
    this.copy = b;
  }

  getCopyExists() {
    return this.copy;
  }

}
