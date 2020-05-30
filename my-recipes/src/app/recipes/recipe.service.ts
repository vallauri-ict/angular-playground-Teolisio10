import { /*Output, EventEmitter,*/ Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    /*@Output() recipeSelected = new EventEmitter<Recipe>();*/

    public recipes: Recipe[];
    public selectedRecipe: Recipe;

    constructor (private dataStorageService: DataStorageService, private shoppingListService: ShoppingListService) { };

    // RECUPERIAMO TUTTE LE RECIPES
    getRecipes() {
        this.dataStorageService.sendGetRequest('recipes').subscribe((data: any[]) => {
            console.log(data);
            this.recipes = data;
        });
    }

    // SINGOLA RECIPE
    getRecipe(index: number) {
        this.dataStorageService.sendGetRequest('recipes/' + index).subscribe((data: Recipe) => {
            console.log(data);
            this.selectedRecipe = data;
        });
    }

    // METODO RICHIAMATO QUANDO DALL'recipe-detail VIENE RICHIESTA L'AGGIUNTA DEGLI ingredients ALLA shopping-list
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // VENGONO INSERITI 1 O PIU' INGREDIENTI NELL'ARRAY DEL SERVICE RIFERITO A shopping-list
        this.shoppingListService.addIngredients(ingredients);
    }
}