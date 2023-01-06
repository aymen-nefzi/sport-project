import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url:string="http://localhost:3000/search"
  constructor(private httpClient:HttpClient) { }

  search(obj){
    return this.httpClient.post(this.url,obj)
  }
}
