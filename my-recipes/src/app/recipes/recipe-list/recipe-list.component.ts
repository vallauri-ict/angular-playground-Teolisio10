import { Component, OnInit } from '@angular/core';
// OCCORRE EFFETTUARE L'import MANUALMENTE NEL CASO L'IDE NON LO FACCIA
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // ARRAY DI Recipe DA VISUALIZZARE
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg'),
    new Recipe('Test', 'aaaaa', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg'),
    new Recipe('Try', 'bbbbbb', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg'),
    new Recipe('Family', 'ccccc', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg'),
    new Recipe('School', 'ddddd', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg'),
    new Recipe('Food', 'eeeeeeee', 'https://image.freepik.com/vettori-gratuito/illustrazione-del-razzo-volante-di-pixel_41992-760.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
