import { Component } from '@angular/core';
import { Child1Component } from "./child1/child1.component";
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

@Component({
  selector: 'app-root',
  imports: [Child1Component, Child3Component,Child4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter={
    count:0
  }
  increment(){
   this.counter.count=this.counter.count+1;
   
  }

  updateCounterRef(){
    this.counter={...this.counter,count:this.counter.count+1}
  }
}
