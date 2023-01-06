import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string="http://localhost:3000/user"
  constructor(private httpClient:HttpClient) { }
    // user : email,pwd, firstname , lastname,....
  signup(userObj){
    return this.httpClient.post<{message:any, object:any}>(`${this.userURL}/signup`,userObj)
  }

  // user : email,pwd
  login(userObj){
    return this.httpClient.post<{message:any,user:any}>(`${this.userURL}/login`,userObj)
  }

  displayProfile(id){
    
      return this.httpClient.post(`${this.userURL}`,`${id}`)
    
  }

  editProfile(userObj){
    return this.httpClient.get(`${this.userURL}`,userObj)
  }
}
