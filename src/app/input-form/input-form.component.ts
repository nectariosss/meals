import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MealServices } from '../meals.services';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @ViewChild('formref') form: NgForm
  @ViewChild('ingredient') ingredient:ElementRef;
  @ViewChild('apparatus') apparatus:ElementRef;
  @ViewChild('name') name:ElementRef;
  
  meal= {};
  ingredients_array = []
  apparatus_array = []
  meals_array = [];

  constructor(private mealServices: MealServices) {}

  ngOnInit(): void {
    this.meals_array = this.mealServices.meals
  }

  onApparatusAdd () {
  if (this.apparatus.nativeElement.value.length != 0) {
    this.apparatus_array.push(this.apparatus.nativeElement.value);
    this.apparatus.nativeElement.value = "";
  }
}

onIngredientsAdd () {
  if (this.ingredient.nativeElement.value != 0) {
    this.ingredients_array.push(this.ingredient.nativeElement.value);
    this.ingredient.nativeElement.value = "";
  }
}

onSubmit() {

  if (this.name.nativeElement.value.length != 0) {

    // Adding the form to the meal variable
    this.meal = {name: this.name.nativeElement.value,
    ingredients: this.ingredients_array,
    apparatus: this.apparatus_array,
    description:""}

    // Clearing the local variables
    this.name.nativeElement.value = ""
    this.ingredients_array = [];
    this.apparatus_array = [];


    // Adding the meal to the Services class by pushing it to the local meals_array variable (pass by refference)
    this.meals_array.push(this.meal)
  } else

  alert('enter a name')

}

}
