import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients:Ingredient[] = [new Ingredient('Apple',5),
new Ingredient('Tomato',5),
new Ingredient('Onion',5)]
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngriedent(ing:Ingredient){
this.ingredients.push(ing)
  }

}
