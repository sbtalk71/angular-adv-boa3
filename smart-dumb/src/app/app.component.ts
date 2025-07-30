import { Component } from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  imports: [UserlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-dumb';
}
