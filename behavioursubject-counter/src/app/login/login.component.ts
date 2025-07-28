import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username="";
  password="";
 
  isLoggedIn=false;
  currentUser:string|null=null;

  constructor(private authService:AuthService){
    this.authService.isLoggedIn$.subscribe(value=>this.isLoggedIn=value)
    this.authService.currentUser$.subscribe(value=>this.currentUser=value);
  }

  login(){
    const success=this.authService.login(this.username,this.password);
    if(!success){
      alert("invalid credentials..")
    }
  }

  logout(){
    this.authService.logout();
  }
  
}
