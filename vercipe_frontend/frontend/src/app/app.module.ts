import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateBoardComponent } from './create-board/create-board.component';

import { HttpClientModule } from '@angular/common/http';

import { RecipeService } from './recipe.service';
import { UserService } from './user/user.service';

import { DetailBoardComponent } from './detail-board/detail-board.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { FocusInputDirective } from './create-board/create-board.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CreateBoardComponent,
    DetailBoardComponent,
    HeaderComponent,
    FooterComponent,
    RecipeListComponent,
    SignUpComponent,
    LogInComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FocusInputDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    RecipeService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
