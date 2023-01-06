import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches:any
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.displayAllMatches().subscribe(
      (data)=>{
        console.log("here data from BE", data);
        this.matches=data.matchTable;
      }
    
    )
// this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
  }
  score(scOne,scTwo){
    let result=""
  if (scOne>scTwo) {
    result="0"
  } else if (scTwo>scOne) {
    result="1"
  }else{
    result="2"
  }
  return result
  }
}
