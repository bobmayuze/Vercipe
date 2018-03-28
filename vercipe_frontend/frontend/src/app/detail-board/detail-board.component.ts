import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    version: number = null;
    created_at: Date = null;
    id: string = null;

    constructor(
        private service: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getRecipeById();
    }

    renderRecipe = (recipe) => {
        this.title = recipe.title;
        this.creator = recipe.creator;
        this.creator_email = recipe.creator_email;
        this.materials = recipe.materials;
        this.instructions = recipe.instructions;
        this.version = recipe.version;
        this.created_at = recipe.created_at;
    }

    getRecipeById = () => {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.service.getRecipeById(this.id).subscribe(recipe => {
            console.log(recipe);
            this.renderRecipe(recipe);
        })
    }

    // Uses the current recipe id to fetch previous versions
    getRecipeByVersion = (version: string) => {

    }

    deleteRecipe() {
        this.service.deleteRecipe(this.id);
        this.goBack();
    }

    cloneRecipe = () => {
        this.service.cloneRecipe(this.id);
    }

    goBack = () => {
        this.router.navigateByUrl(`/recipes/${this.title}`);
    }

}
