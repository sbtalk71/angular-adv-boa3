import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dnd-demo',
  imports: [CdkDrag,CdkDropList],
  templateUrl: './dnd-demo.component.html',
  styleUrl: './dnd-demo.component.css'
})
export class DndDemoComponent {
fruits=['apple','banana','cherry','mango','guava','orange']
}
