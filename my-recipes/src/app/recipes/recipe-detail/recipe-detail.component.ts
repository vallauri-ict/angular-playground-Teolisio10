import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // N.B. PER RICEVERE L'INPUT
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
