import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // N.B. PER RICEVERE L'INPUT
  @Input() recipe: Recipe;

  // INIETTIAMO NEL COSTRUTTORE IL SERVICE
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }
  
  // RICHIAMO DEL METODO MESSO A DISPOSIZIONE DAL SERVICE
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
