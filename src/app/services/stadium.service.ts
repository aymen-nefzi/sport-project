import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumURL:string="http://localhost:3000/stadium"
  constructor(private httpClient:HttpClient) { }
  addStadium(StadiumObj){
    return this.httpClient.post<{message:string}>(this.stadiumURL,StadiumObj)
  }

  displayAllStadiums(){
    return this.httpClient.get<{stadiumsTable:any}>(this.stadiumURL)
  }
  deleteStadium(id){
    return this.httpClient.delete<{message:string}>(`${this.stadiumURL}/${id}`)
  }
  editStadium(stadiumObj){
    return this.httpClient.put<{player:any}>(`${this.stadiumURL}/${stadiumObj._id}`,stadiumObj)
  }
}
