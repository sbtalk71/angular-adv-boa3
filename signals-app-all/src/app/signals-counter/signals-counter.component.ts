import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-counter',
  imports: [],
  templateUrl: './signals-counter.component.html',
  styleUrl: './signals-counter.component.css'
})
export class SignalsCounterComponent {

  counter=signal({count:0});

  constructor(){
    effect(()=>console.log("Current value of counter ",this.counter()));
  }

  increment(){
    this.counter.update(c=>({count:c.count+1}));
  }

  decrement(){
    this.counter.update(c=>({count:c.count-1}));
  }

  reset(){
    this.counter.set({count:0});
  }
}
