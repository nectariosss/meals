import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealServices } from './meals.services';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
  providers: [MealServices]
})
export class AppRoutingModule { }
