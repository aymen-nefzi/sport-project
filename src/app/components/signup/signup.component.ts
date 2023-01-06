import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // form ID
  signupForm: FormGroup;
  signupP: string = "SIGNUP"
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmPwd: [""],
    }, {
      validators: MustMatch("pwd", "confirmPwd")
    });
  }

  signup() {
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log("here data after signup", data.message, data.object);
        this.router.navigate(["login"])

      })

  }

}
