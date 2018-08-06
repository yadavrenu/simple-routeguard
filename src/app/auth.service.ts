import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName;
  // password;
  name="renu";
  // reqPass="yadav";
  loggedInStatus = false;
  constructor() { }

  // getData(){
  //  return this.userName;
  // }

  setData(newData){
    this.userName=newData;
    // this.password=pass;

  }
 get isLoggedIn(){

    if(this.name==this.userName)
      this.loggedInStatus=true;

    else
    this.loggedInStatus=false;

    return this.loggedInStatus;
  
  }
}
