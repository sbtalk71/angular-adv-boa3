import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
data="";

constructor(private auth:AuthService,private router:Router){

}
ngOnInit(): void {
  this.auth.getProtectedData().subscribe({
    next: (serverResp)=>{this.data=serverResp.message},
    error:()=>this.router.navigate(["unauthorized"])
  });
}

}
