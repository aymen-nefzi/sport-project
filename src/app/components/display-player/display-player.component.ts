import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  playerForm:FormGroup
  player:any={}
  
  id:any
  constructor(private playerService:PlayerService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    this.playerService.displayPlayerById(this.id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.player=response.player
      }
    )
  }
  
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      (data)=>{
        console.log(data.player);
        
      }
    )
    this.router.navigate(["admin"])
  }
}
