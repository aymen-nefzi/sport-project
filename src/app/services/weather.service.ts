import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  countryURL:string="http://localhost:3000/weather";
  constructor(private httpClient:HttpClient) { }

  displayweather(obj){
    
    return this.httpClient.post<{result:any}>(this.countryURL,obj)
  
}
}
