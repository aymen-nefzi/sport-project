import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL:string="http://localhost:3000/matches";
  constructor(private httpClient:HttpClient) { }

  // array of objects
  displayAllMatches(){
    return this.httpClient.get<{matchTable:any}>(this.matchURL)
  }

  // one object if found
  displayMatchById(id){
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${id}`)
    // return this.httpClient.get(this.matchURL+"/"+${id}`)
  }

  // delete one object from DB
  deleteMatchById(id){
    return this.httpClient.delete<{message:string}>(`${this.matchURL}/${id}`)
  }


  
  addMatch(matchObj){
    return this.httpClient.post<{message:String}>(this.matchURL,matchObj)
  }

  editMatch(matchObj){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/${matchObj._id}`,matchObj)
  }


  
}
