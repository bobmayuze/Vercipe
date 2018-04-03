import { Component, OnInit, Directive, AfterContentInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFocusInput]'
})
export class FocusInputDirective implements AfterContentInit {
  private firstTime: Boolean = true;
  constructor(public elem: ElementRef) {}

  ngAfterContentInit() {
    console.log('at least we\'re here');
    this.elem.nativeElement.focus();
  }
}

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css'],
})
export class CreateBoardComponent implements OnInit {

  private title: string;
  private prepTime: number;
  private cookTime: number;
  private instructs: string[] = [``];
  private materials: string[] = [``];

  constructor(
    private location: Location,
    private recipeSevice: RecipeService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  addStep(): void {
    this.instructs.push(``);
    this.cdRef.detectChanges();
  }

  remStep(): void {
    this.instructs.pop();
  }

  addMat(): void {
    this.materials.push(``);
    this.cdRef.detectChanges();
  }

  remMat(): void {
    this.materials.pop();
  }

  submit(): void {

    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));

    if (loginFlag === `null`) {
      alert(`Please Login First`);
    } else {
      const user: any = JSON.parse(sessionStorage.getItem(`currentUser`));
      console.log(user[`username`]);
      console.log(user[`email`]);

      const send: any = {};
      send.title = this.title;
      send.creator = user[`username`];
      send.creator_email = user[`email`];
      send.materials = this.materials;
      send.instructions = this.instructs;

      this.recipeSevice.createRecipe(send);

      alert(`Submitted`);

      this.router.navigateByUrl('/dashboard');
    }
  }

}
