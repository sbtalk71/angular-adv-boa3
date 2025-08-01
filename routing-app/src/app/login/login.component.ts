import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:User={username:"",password:""};

  constructor(private auth:AuthService, private router:Router){

  }

  doLogin(){
    this.auth.login(this.user).subscribe({
      next: jwt=>{
        localStorage.setItem("token",jwt.token);
        this.router.navigate(['/'])
      },
      error: ()=>this.router.navigate(["unauthorized"])
    });
    

  }
}
