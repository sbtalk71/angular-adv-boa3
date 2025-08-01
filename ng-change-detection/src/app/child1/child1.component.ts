import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  imports: [Child2Component],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component {

  @Input() mycounter:any;
}
