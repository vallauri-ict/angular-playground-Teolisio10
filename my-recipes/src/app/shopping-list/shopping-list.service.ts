import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("mela", 5),
        new Ingredient("pomodori", 10)
    ];

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}