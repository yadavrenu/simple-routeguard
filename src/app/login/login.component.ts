import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username="";
//  password;

  submit(){
    this.auth.setData(this.username);
    console.log(this.username);
    this.router.navigate(['/admin']);
  }
  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit() {
  }

}
