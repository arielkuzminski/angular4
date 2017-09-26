import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 0.5),
    new Ingredient('Cheese', 0.5),
    new Ingredient('Ketchup', 1),
    new Ingredient('Salami', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

}
