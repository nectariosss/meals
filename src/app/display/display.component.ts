import { Component, OnInit } from '@angular/core';
import { MealServices } from '../meals.services';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{

meals_array = [];
  constructor(
    private http:HttpClient, 
    private mealservices:MealServices) {}

  ngOnInit(): void {
    this.http.get('https://meals-94a70-default-rtdb.firebaseio.com/meals.json')
// pipe is added to chain methods in observables. In this case so you can add the map method before the subscribe.
    .pipe(
      map(
        (data)=> {
        let data_array = []
        for (let item in data) {
          data_array.push({...data[item]})  
        }
      return data_array
      }
      )
    )
    .subscribe(
      (data)=> {
        console.log(data)
      }
    )


    this.meals_array = this.mealservices.meals
  }
}
