import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchById } from 'src/app/functions/searchById';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  url:string;
  id:any;
  match:any;
  constructor(private activateRoute:ActivatedRoute ,
              private router:Router,
              private matchService:MatchService
    ) { }

  ngOnInit() {
    // this.url=this.router.url;
    // =+ pour la convertion ver un number
    this.id=this.activateRoute.snapshot.paramMap.get("id")
    // console.log("url,this.url");
    // console.log("Id",this.id);
    // this.match=searchById(this.id,"matches");
   this.matchService.displayMatchById(this.id).subscribe(
    (data)=>{
      this.match=data.match
    }
   )
  }

}
