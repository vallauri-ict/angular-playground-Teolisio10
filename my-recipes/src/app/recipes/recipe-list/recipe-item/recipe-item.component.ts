import { Component, OnInit, Input, /*Output, EventEmitter*/ } from '@angular/core';
import { Recipe } from '../../recipe.model';
/*import { RecipeService } from '../../recipe.service';*/

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // RICEVIAMO I DATI GIA' ESISTENTI USANDO IL DECORATORE @Input
  // OCCORRE METTERLO ANCHE SOPRA NELLA import
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(/*private recipeService: RecipeService*/) { }

  ngOnInit(): void {
  }

  /*onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }*/

}
