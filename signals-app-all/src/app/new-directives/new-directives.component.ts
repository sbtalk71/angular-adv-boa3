import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-directives',
  imports: [CommonModule],
  templateUrl: './new-directives.component.html',
  styleUrl: './new-directives.component.css'
})
export class NewDirectivesComponent {

  isAdmin=true;

  users=[
    {id:1,name:"shantanu"},
    {id:2,name:"charan"},
    {id:3,name:"nirmal"},
    {id:4,name:"ratan"},
    {id:5,name:"zubair"}
  ]

  updateUsers(){
    this.users=[
    {id:1,name:"shantanu"},
    {id:2,name:"charan"},
    {id:3,name:"nirmal"},
    {id:4,name:"ratan"},
    {id:5,name:"zubair"},
    {id:6,name:"Jahangir"},
    {id:7,name:"Munna"},
    {id:8,name:"Ketan"}

  ]
  }

  trackById(id:number){
    console.log(id);
    return id;
  }

  status:string="success";

  items=10;
  price=2.39;
}
