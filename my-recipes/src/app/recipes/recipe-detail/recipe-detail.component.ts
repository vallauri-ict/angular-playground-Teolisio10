import { Component, OnInit, /*Input*/ } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // N.B. PER RICEVERE L'INPUT
  /*@Input() recipe: Recipe;*/

  // INIETTIAMO NEL COSTRUTTORE IL SERVICE
  constructor(public recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // CON IL + SI EFFETTUA UN CAST
      this.recipeService.getRecipe(+params['id']);
    });
  }
  
  // RICHIAMO DEL METODO MESSO A DISPOSIZIONE DAL SERVICE
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeService.selectedRecipe.ingredients);
  }
}
