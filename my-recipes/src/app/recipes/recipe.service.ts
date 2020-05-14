import { Output, EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    public recipes: Recipe[];

    constructor (private dataStorageService: DataStorageService) { };

    getRecipes() {
        this.dataStorageService.sendGetRequest('recipes').subscribe((data: any[]) => {
            console.log(data);
            this.recipes = data;
        })
    }
}