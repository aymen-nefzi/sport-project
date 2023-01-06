import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/functions/generateId';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup
  player: any = {}
  imagePreview: any
  constructor(private playerService: PlayerService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.addPlayerForm = this.fb.group({
      playerName: [""],
      age: [""],
      number: [""],
      position: [""],
      img: [""],
    })
  }
  addPlayer() {
    // var players=JSON.parse(localStorage.getItem("players")||"[]")
    // this.player.id=generateId(players)+1
    // players.push(this.player)
    // localStorage.setItem("players",JSON.stringify(players))
    this.playerService.addPlayer(this.player, this.addPlayerForm.value.img).subscribe(
      (data) => {
        console.log("here data after adding player", data.message);
        // this.router.navigate(["admin"])

      }
    );
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPlayerForm.patchValue({ img: file });
    this.addPlayerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }



}
