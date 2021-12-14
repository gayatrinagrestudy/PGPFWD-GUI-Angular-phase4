import { Fooditem } from './../fooditem';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  private allFoodItems = "http://localhost:8080/api/v1/fooditems"
  private allFoodItemsByName = "http://localhost:8080/api/v1/fooditems/search"
  private itemByCategory = "http://localhost:8080/api/v1/fooditems/category/FASTFOOD"

  public search = new BehaviorSubject<string>("");
  
  constructor(private httpClient:HttpClient ) { }

  getItemList(): Observable<Fooditem[]>{
      return this.httpClient.get<Fooditem[]>(`${this.allFoodItems}`)
  }
  
  getFastFoodItems(): Observable<Fooditem[]>{
    return this.httpClient.get<Fooditem[]>(`${this.itemByCategory}`)
}

getFoodItemById(id: number) : Observable<Fooditem>{
    return this.httpClient.get<Fooditem>(`${this.allFoodItems}/${id}`)
}

getFoodItemByName(name: string) : Observable<Fooditem>{
  return this.httpClient.get<Fooditem>(`${this.allFoodItemsByName}/${name}`)
}
  
}
