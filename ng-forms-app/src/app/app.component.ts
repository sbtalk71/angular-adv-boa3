import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from "./user-form/user-form.component";
import { NgrxUserFormComponent } from "./ngrx-user-form/ngrx-user-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserFormComponent, NgrxUserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-forms-app';
}
