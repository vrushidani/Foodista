import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods : Food[]= [];

  constructor(private foodService : FoodService, activatedRoute:ActivatedRoute){

    let foodObservable : Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      console.log("homecomponent==",params.searchTerm,"====",params.tag)
      if(params.searchTerm){
        foodObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        console.log("params.tag===",params.tag)
        foodObservable = this.foodService.getAllFoodByTags(params.tag);
        console.log("params.tag this.foods===", this.foods)
      }
      else{
        foodObservable = this.foodService.getAll();
      }
      foodObservable.subscribe((serverFoods)=>
      this.foods = serverFoods)
    })
  }

  ngOnInit(): void {}

}
