import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card'

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './recipe.service'

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
