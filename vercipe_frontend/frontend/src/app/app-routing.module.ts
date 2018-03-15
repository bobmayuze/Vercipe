import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SearchBoxComponent },
  { path: 'create', component: CreateBoardComponent },
  { path: 'detail', component: DetailBoardComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:title', component: RecipeListComponent },
  { path: '404', component: PageNotFoundComponent },
  // { path: '/*path', redirectTo: ['NotFound'] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
