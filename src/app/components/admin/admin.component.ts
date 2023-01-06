import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteobject } from 'src/app/functions/deleteObject';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  actualDate:any
admin:string="Admin Dashboard"

  constructor(private router:Router ,
              private matchService:MatchService            
  ) { }

  ngOnInit() {
    // this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
    // CALL SERVICE TO GET ALL MATCHES
    this.actualDate=new Date();
    
  }

  deleteMatch(id){
  deleteobject(id,"matches");
  // this.matches=JSON.parse(localStorage.getItem("matches")||"[]");
  }

  displayMatch(id){
    this.router.navigate([`display-match/${id}`]);
    
  }

  editMatch(id){
    this.router.navigate([`edit-match/${id}`]);
  }

 
}
