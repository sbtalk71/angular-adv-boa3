import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DndDemoComponent } from "./dnd-demo/dnd-demo.component";
import { ReseourceDemoComponent } from './reseource-demo/reseource-demo.component';

@Component({
  selector: 'app-root',
  imports: [DndDemoComponent,ReseourceDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dnd-resource';
}
