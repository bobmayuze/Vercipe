import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateBoardComponent } from './create-board/create-board.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'create', component: CreateBoardComponent },
  { path: 'detail', component: DetailBoardComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'all', component: RecipeListComponent },
  { path: 'user', component: DashboardComponent }
  // { path: 'search', component: HeroSearchComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // // It routes to heros
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
