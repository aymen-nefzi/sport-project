import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/functions/generateId';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  allMatches=[]
  id :number
  addMatchForm:FormGroup
  match:any={}
  matchP:string="Add Match"
  constructor(private router:Router,private matchService:MatchService) { }

  ngOnInit() {
    
    
  }
  addMatch(){
    // this.id=JSON.parse(localStorage.getItem("id")||"10")
    // console.log(this.id);
    
    // this.match.id=this.id
    // console.log(this.match);
    
    // localStorage.setItem("id",JSON.stringify(Number(this.id+1)))
    // this.allMatches.push(this.match)
    // localStorage.setItem("matches",JSON.stringify(this.allMatches))
    this.matchService.addMatch(this.match).subscribe(
      (data)=>{
        console.log("here data from BE",data.message);
        this.match=data.message;
        this.router.navigate(["admin"]);
      }
    )
    
  }

}
