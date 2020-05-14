import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // ACCESSO DIRETTO AD UN ELEMENTO DEL DOM
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // USIAMO IL MODELLO Ingredient E GENERIAMO UN EVENTO
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    // const PERCHE' GLI DIAMO UN SOLO VALORE CHE NON CAMBIERA' MAI
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    // EMITTIAMO L'EVENTO PASSANDO L'INGREDIENTE CREATO CHE INTERCETTEREMO NEL app-shopping-edit
    // IN shopping-list HTML, INTERCETTANDO L'ARGOMENTO newIngredient CON $event
    //this.ingredientAdded.emit(newIngredient);

    this.slService.addIngredient(newIngredient);
  }

  // arrayPush(name, amount) {    
  // }
}
