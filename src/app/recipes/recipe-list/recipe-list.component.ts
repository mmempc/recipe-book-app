import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Koshary','Koshary is one hell a7a zobr teez kos of a dish',
  'https://media-cdn.tripadvisor.com/media/photo-s/01/83/f4/99/koshary-when-all-the.jpg')
,new Recipe('falafel','a7a neeeeeeeeeeeeeeeeeeeeek','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg')];

  constructor() {}

  ngOnInit(): void {}
}
