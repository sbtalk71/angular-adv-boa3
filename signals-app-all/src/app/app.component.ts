import { Component, computed, effect, signal } from '@angular/core';
import { SignalsCounterComponent } from './signals-counter/signals-counter.component';
import { NewDirectivesComponent } from './new-directives/new-directives.component';
import { DeferredComponent } from './deferred/deferred.component';

@Component({
  selector: 'app-root',
  imports: [SignalsCounterComponent,NewDirectivesComponent,DeferredComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals-app-all';

  constructor(){
    console.log("Effect is initialized..");
    effect(()=>console.log("Effects called ...",this.a(),this.b()));
  }

  num1:number=10;
  num2:number=20;
  sum=this.num1+this.num2;

  changeValue(){
    this.num1=30;
    console.log(this.sum);
    console.log("value of num1 : ",this.num1);
  }

  //signals
  a=signal(10);
  b=signal(20);

  sum2=computed(()=>this.a()+this.b())
  changeSignalValue(){
    this.a.update(value=>value+30);
  }


}
