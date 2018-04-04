import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
    selector: 'app-detail-board',
    templateUrl: './detail-board.component.html',
    styleUrls: ['./detail-board.component.css']
})
export class DetailBoardComponent implements OnInit {
    title: string = null;
    creator: string = null;
    creator_email: string = null;
    materials: string[] = null;
    instructions: string = null;
    currentVersion: number;
    created_at: Date = null;
    previousVersions: any = {};
    id: string = null;
    currentRecipe: any;


    constructor(
        private location: Location,
        private service: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.previousVersions.versions = null;
        this.getRecipeById();
    }

    renderRecipe = (recipe) => {
        this.title = recipe.title;
        this.creator = recipe.creator;
        this.creator_email = recipe.creator_email;
        this.materials = recipe.materials;
        this.instructions = recipe.instructions;
        this.currentVersion = recipe.version;
        this.created_at = recipe.created_at;
        console.log(`Render Finished`);

    }

    // Uses the current recipe id to fetch previous versions
    getAllPrevious = () => {
        console.log(`Getting previous versions of `, this.id);
        this.service.getVersionsById(this.id).subscribe(versions => {
            this.previousVersions = versions;
            console.log(this.previousVersions);
        });
    }

    getRecipeById = () => {
        this.id = this.route.snapshot.paramMap.get('id');
        this.service.getRecipeById(this.id).subscribe((recipe) => {
            this.currentRecipe = recipe;
            this.getAllPrevious();
            this.renderRecipe(this.currentRecipe);
        });
    }

    // I'm not set on this behavior, open to suggestions
    deleteRecipe() {
        this.service.deleteRecipe(this.id);
        this.goBack();
    }

    // To be completed
    cloneRecipe = () => {
        this.service.cloneRecipe(this.id);
    }

    goBack(): void {
        this.location.back();
    }

    jumpTo(record: string): void {
        console.log(`JUMPPPPPP`);
        console.log(record);
        this.router.navigateByUrl('/detail/' + record);
        window.location.reload();
    }

}
