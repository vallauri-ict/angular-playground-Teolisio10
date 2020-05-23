import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable ({
    providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("mela", 5),
        new Ingredient("pomodori", 10)
    ];

    // VISUALIZZA TUTTI INGREDIENTI
    getIngredients() {
        return this.ingredients;
    }

    // AGGIUNGE UN INGREDIENTE
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    // AGGIUNGE PIU' INGREDIENTI
    addIngredients(ingredients: Ingredient[]) {
        // SPREAD OPERATOR
        this.ingredients.push(...ingredients);
    }
}