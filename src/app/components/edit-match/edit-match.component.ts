import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchById } from 'src/app/functions/searchById';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  // test pipe asterix
  // ch:any="AaymeenaY"
  id:any
  match:any
  // matchedited:any
  constructor(private activateRoute:ActivatedRoute,private router:Router, private matchService:MatchService) { }
  
  ngOnInit() {
    this.id=this.activateRoute.snapshot.paramMap.get("id")
    // this.match=searchById(this.id,"matches");
    this.matchService.displayMatchById(this.id).subscribe(
      (data)=>{
        this.match=data.match
      }
    )
  }

editMatch(){   
//   var matches=JSON.parse(localStorage.getItem("matches")||"[]")
//   for (let i = 0; i < matches.length; i++) {
//   if (matches[i].id==this.id) {
//     matches[i]=this.match
//     break
//   }
// }
// localStorage.setItem("matches",JSON.stringify(matches))
// this.router.navigate(["admin"])
  
// 
this.matchService.editMatch(this.match).subscribe(
  (data)=>{
    console.log("here message after update",data.message);
    this.router.navigate(["admin"])
    
  }
)
}
}
