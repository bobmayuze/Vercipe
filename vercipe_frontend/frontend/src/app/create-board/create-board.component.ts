import { Component, OnInit, Directive, AfterContentInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFocusInput]'
})
export class FocusInputDirective implements AfterContentInit {
  constructor(public elem: ElementRef) {}

  ngAfterContentInit() {
    if (this.elem.nativeElement.attributes[4].value.slice(-1) !== '1') {
      this.elem.nativeElement.focus();
    }
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
  private prev_id: string = null;
  private instructs: string[] = [``];
  private materials: string[] = [``];

  constructor(
    private location: Location,
    private recipeService: RecipeService,
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
    if (this.recipeService.getCopyExists()) {
      const originalRecipe: any = this.recipeService.getCopy();
      console.log(`COPY SERVEICE CALLED  HERE`, originalRecipe);
      this.title = originalRecipe[`title`];
      this.materials = originalRecipe[`materials`];
      this.instructs = originalRecipe[`instructions`];
      this.prev_id = originalRecipe[`_id`];
      this.recipeService.setCopyExists(false);
      this.cdRef.detectChanges();
    }
    this.cdRef.detectChanges();
  }


  addStep(): void {
    this.instructs.push(``);
    this.cdRef.detectChanges();
  }

  remStep(index: number): void {
    this.instructs.splice(index, 1);
    this.cdRef.detectChanges();
  }

  addMat(): void {
    this.materials.push(``);
    this.cdRef.detectChanges();
  }

  remMat(index: number): void {
    this.materials.splice(index, 1);
    this.cdRef.detectChanges();
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
      send.previous_version =  this.prev_id || `None`;

      this.recipeService.createRecipe(send);

      alert(`Submitted`);

      this.router.navigateByUrl('/dashboard');
    }
  }

}
