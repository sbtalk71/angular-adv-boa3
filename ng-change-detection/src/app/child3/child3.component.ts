import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  imports: [],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component {
  time: string = "";

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  updateTime(){
    const update=()=>{
      this.time=new Date().toLocaleTimeString();
     this.cdr.detectChanges(); //if you want cd to run uncomment this line
      setTimeout(update,4000);
    }
    update();
  }
}
