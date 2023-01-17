import { Component, OnInit } from '@angular/core';
import { MealServices } from '../meals.services';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{

meals_array = [];
  constructor(private mealservices:MealServices) {}

  ngOnInit(): void {
    this.meals_array = this.mealservices.meals
  }

}
