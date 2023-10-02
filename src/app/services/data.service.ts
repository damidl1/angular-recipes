import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly DB_URL = "https://651a7a96340309952f0d59e1.mockapi.io/recipe";

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.DB_URL);
  }

  getRecipe(recipeId: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.DB_URL + '/' + recipeId);
  }

  postRecipe(newRecipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.DB_URL, newRecipe, {headers: {'content-type':'application/json'}})
  }
}
