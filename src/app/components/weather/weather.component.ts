import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm:FormGroup
  weather:any={}
  result:any
  isloaded:boolean=false
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  weatherSeach(){
    this.isloaded=true
    this.weatherService.displayweather(this.weather).subscribe(
      (data)=>{
        console.log("here weather",data.result);
        this.isloaded=false
        this.result=data.result
      }
    )
  }

}
