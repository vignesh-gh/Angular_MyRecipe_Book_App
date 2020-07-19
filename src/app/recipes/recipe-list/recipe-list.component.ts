import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  listofRecipe:Recipes[]=[
    new Recipes("Test Recipe","This is Test recipe ","https://images.media-allrecipes.com/images/58656.png"),
    new Recipes("Test Recipe","This is Test recipe ","https://images.media-allrecipes.com/images/58656.png")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
