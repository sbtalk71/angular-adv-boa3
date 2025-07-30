import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  canExit(){
    if(window.confirm("Do you want to leave the page..")){
      return true;
    }else{
      return false;
    }
  }
}
