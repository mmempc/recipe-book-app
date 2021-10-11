import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Koshary',
      'Koshary is delecious',
      'https://media-cdn.tripadvisor.com/media/photo-s/01/83/f4/99/koshary-when-all-the.jpg'
    ),
    new Recipe(
      'falafel',
      'falafeeel',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onItemClicked(recipeItemData: Recipe) {
    this.recipeEvent.emit(recipeItemData);
  }
}
