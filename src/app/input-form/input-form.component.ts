import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MealServices } from '../meals.services';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {

  @ViewChild('formref') form: NgForm
  @ViewChild('ingredient') ingredient:ElementRef;
  @ViewChild('apparatus') apparatus:ElementRef;
  @ViewChild('name') name:ElementRef;
  
  meal= {};
  meal_name = "";
  ingredients_array = []
  apparatus_array = []

  constructor(private mealServices: MealServices) {}

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
    this.meal_name = this.name.nativeElement.value;
    this.meal = {name: this.meal_name,
    ingredients: this.ingredients_array,
    apparatus: this.apparatus_array}
    console.log(this.meal)
  } else
  alert('enter a name')
}

}
