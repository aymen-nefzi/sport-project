import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any=[]
  constructor(private teamService:TeamService) { }

  ngOnInit() {
    // this.teams=JSON.parse(localStorage.getItem("teams")||"[]")
    this.teamService.displayAllTeams().subscribe(
      (data)=>{
        console.log("here data from BE", data);
        this.teams=data.teamsTable;
      }
    )
  }

  deleteteam(id){
    // call service to send delete request

  }

}
