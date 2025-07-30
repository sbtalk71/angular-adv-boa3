import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private auth:AuthService, private router:Router){

  }

  doLogin(){
    this.auth.login("admin","admin125");
    if(this.auth.isLoggedIn()){
      this.router.navigate(["admin"])
    }else{
      this.router.navigate(["login"])
    }

  }
}
