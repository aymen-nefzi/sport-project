import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches:any=[]
  constructor(private router:Router ,
    private matchService:MatchService ) { }

  ngOnInit() {
    this.matchService.displayAllMatches().subscribe(
      (data)=>{
        this.displayAllMatches()
      }
    )
  }
  deleteMatch(id){
    this.matchService.deleteMatchById(id).subscribe(
      (data)=>{
        this.displayAllMatches()
      }
    )
  }
  displayAllMatches(){
    this.matchService.displayAllMatches().subscribe(
      (data)=>{
        console.log("here data from BE", data);
        this.matches=data.matchTable;
      }
    
    )
  }

  displayMatch(id){
    this.router.navigate([`display-match/${id}`])
  }
  editMatch(id){
    this.router.navigate([`edit-match/${id}`])
  }
}
