import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any={}
  loginP:string="LOGIN"
  constructor(private userService:UserService) { }

  ngOnInit() {
   
  }

  login(){
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log("logged in ");
        
        console.log(data.message);  
      }
    )
    
  }

}
