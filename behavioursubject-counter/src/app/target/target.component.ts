import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-target',
  imports: [],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent {
counter: number = 0;
  constructor(private counterService: CounterService) {
    this.counterService.counter$.subscribe(value => this.counter = value);
  }
}
