import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { TargetComponent } from './target/target.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent,TargetComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behavioursubject-counter';
}
