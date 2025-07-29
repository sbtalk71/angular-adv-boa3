import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, decrementDouble, increment, incrementDouble, reset, resetDouble } from './store/counter.actions';
import { CommonModule } from '@angular/common';
import { DoubleCounter, doubleDataSelector } from './store/counter.reducers';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter';

  data$!: Observable<number>;
  doubleData$!:Observable<number>;

  constructor(private store: Store<{ counter: number }>,private doubleStore:Store<{doubleCounter:DoubleCounter}>) {
    this.data$ = this.store.select('counter');
    this.doubleData$=this.doubleStore.select(doubleDataSelector)
  }

  doIncrement() {
    this.store.dispatch(increment());
  }

  doDecrement() {
    this.store.dispatch(decrement())
  }

  doReset() {
    this.store.dispatch(reset())
  }

  doDoubleIncrement() {
    this.store.dispatch(incrementDouble());
  }

  doDoubleDecrement() {
    this.store.dispatch(decrementDouble())
  }

  doDoubleReset() {
    this.store.dispatch(resetDouble())
  }
}
