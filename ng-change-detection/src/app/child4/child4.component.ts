import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-child4',
  imports: [],
  templateUrl: './child4.component.html',
  styleUrl: './child4.component.css'
})
export class Child4Component implements OnInit {
time: string = "";

  constructor(private cdr: ChangeDetectorRef, private ngZone:NgZone) {
    
  }
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(()=>this.updateTime());
  }

  updateTime(){
    const update=()=>{
      this.time=new Date().toLocaleTimeString();
      //this.ngZone.run(()=>this.cdr.detectChanges());
    // this.cdr.detectChanges(); //if you want cd to run uncomment this line
      setTimeout(update,4000);
    }
    update();
  }
}
