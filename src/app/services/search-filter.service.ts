import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {

  searchFilterURL:string="http://localhost:3000/search-filter"
  constructor(private httpClient:HttpClient) { }

  displayByScore(){
    return this.httpClient.get<{matches:any}>(this.searchFilterURL)
  }
}
