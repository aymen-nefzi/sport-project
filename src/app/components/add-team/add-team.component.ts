import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm:FormGroup
  team:any={}
  teamT:string="Add Team"
  constructor(private teamService:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    
    // var teams=JSON.parse(localStorage.getItem("teams")||"[]")
    // teams.push(this.team)
    // localStorage.setItem("teams",JSON.stringify(teams))
    this.teamService.addTeam(this.team).subscribe(
        (data)=>{
          console.log("here data after adding team",data.message); 
        }
      );
  }
}
