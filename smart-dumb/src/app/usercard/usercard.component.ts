import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usercard',
  imports: [],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})

export class UserCardComponent {
  @Input() user: any;  // Receiving data from parent
  @Output() delete = new EventEmitter<number>(); // Emitting event to parent

  deleteUser() {
    this.delete.emit(this.user.id);
  }
}


