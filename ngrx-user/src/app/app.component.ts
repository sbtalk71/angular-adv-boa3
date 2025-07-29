import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Store } from '@ngrx/store';
import { UserState } from './store/user.reducers';
import { usersArraySelector } from './store/user.selectors';
import { addUser, removeUser } from './store/user.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-user';

  usersData$!:Observable<User[]>;

  constructor(private userStateStore:Store<{userState:UserState}>){
    this.usersData$=this.userStateStore.select(usersArraySelector)
  }


  addUser(username:string){
    const user= new User();
    user.name=username;
    user.id=Math.floor(Math.random()*100);

    this.userStateStore.dispatch(addUser(user));
  }

  removeUser(uid:number){
    this.userStateStore.dispatch(removeUser({id:uid}));
  }
}
