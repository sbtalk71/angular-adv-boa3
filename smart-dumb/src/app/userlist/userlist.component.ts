import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCardComponent } from '../usercard/usercard.component';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule,UserCardComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];

  removeUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

}
