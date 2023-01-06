import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player:any=[];
  players:any=[];
  pageOfItems: Array<any>;
  @Input() pageSize = 3;
  constructor(private playerService:PlayerService, private router:Router) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem("players")||"[]")
    this.playerService.displayAllPlayers().subscribe(
      (data)=>{
        console.log("here data from BE", data);
        this.players=data.playersTable;
      }
    )
  }

  deletePlayer(id){
    this.playerService.deletePlayerId(id).subscribe(
      (data)=>{
        console.log("here after deleting player");
        this.playerService.displayAllPlayers().subscribe(
          (data)=>{
            this.players=data.playersTable
          }
        )
      }
    )
  }
  
  displayPlayer(id){
    this.router.navigate([`display-player/${id}`])
    // this.playerService.displayPlayerById(id).subscribe(
    //   (data)=>{
    //     console.log("here is the player : ",data.player);
        
    //   }
    // )
    
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
