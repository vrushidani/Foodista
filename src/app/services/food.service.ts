import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { Tag } from '../shared/model/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FOOD_BY_ID_URL, FOOD_BY_SEARCH_URL, FOOD_BY_TAG_URL, FOOD_TAG_URL, FOOD_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOOD_URL)
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.httpClient.get<Food[]>(FOOD_BY_SEARCH_URL +searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOOD_TAG_URL);
  }

  getAllFoodByTags(tags : string):Observable<Food[]>{
    return tags === "All" ? this.getAll() : this.httpClient.get<Food[]>(FOOD_BY_TAG_URL+tags)
  }

  getFoodById(foodId : string){
    return this.httpClient.get<Food>(FOOD_BY_ID_URL +foodId);
  }
}
