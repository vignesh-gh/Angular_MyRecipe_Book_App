import { Component, OnInit } from '@angular/core';
import { Ingrdients } from '../shared/ingredient';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
   ingredients:Ingrdients[]=[
     new Ingrdients("Tomatto",5),
     new Ingrdients("chilli",2)
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
