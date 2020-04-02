import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // RICEVIAMO I DATI GIA' ESISTENTI USANDO IL DECORATORE @Input
  // OCCORRE METTERLO ANCHE SOPRA NELLA import
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
