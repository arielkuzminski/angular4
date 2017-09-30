import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Stripsy', 'Pikantne stripsy z soczystej piersi kurczaka w chrupiącej złocistej panierce - 8szt. (150g)',
      'http://cdn.upmenu.com/static/product-images/9ddc1777-33f7-11e4-ac27-00163edcb8a0/6c40f366-683c-11e4-ac27-' +
      '00163edcb8a0/2/compact/strips-1.png'),
    new Recipe('Twister', 'Tortilla z shoarmą drobiową, kruchą sałatą, papryką, pomidorem i świeżym ogórkiem' +
      ' z sosem kebab', 'http://cdn.upmenu.com/static/product-images/9ddc1777-33f7-11e4-ac27-00163edcb8a0/' +
      'ca97b147-683b-11e4-ac27-00163edcb8a0/2/compact/dsc_0047wk.jpg'),
    new Recipe('De Volaille ', 'Aromatyczny i kruchy francuski de volaille faszerowany serem, podany ze' +
      ' złocistymi frytkami i surówką', 'http://cdn.upmenu.com/static/product-images/9ddc1777-33f7-11e4-' +
      'ac27-00163edcb8a0/8ff6968d-6840-11e4-ac27-00163edcb8a0/2/compact/filmowa-010.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
