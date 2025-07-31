# Angular Change Detection - Detailed Notes

Angular change detection is the mechanism through which the framework synchronizes the DOM with the component data model. Whenever data changes in your application, Angular runs change detection to update the view accordingly.

## 1. Default Change Detection Strategy

This is the default strategy used by Angular. Every time a change occurs in the application (e.g., user event, XHR, timer), Angular checks all components from the root to the leaves.

### Characteristics:
- Checks every component in the component tree.
- Updates the view whenever any change is detected.

### Example:
```ts
@Component({
  selector: 'app-default',
  template: `<p>{{ counter }}</p>
             <button (click)="increment()">Increment</button>`
})
export class DefaultComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
}
```

## 2. OnPush Change Detection Strategy

With `ChangeDetectionStrategy.OnPush`, Angular will only check a component when:
- One of its `@Input()` properties changes.
- An event is fired from inside the component.
- Manually triggered (e.g., `ChangeDetectorRef.markForCheck()` or `detectChanges()`).

### Benefits:
- Improved performance.
- Reduces the number of components checked.

### Example:
```ts
@Component({
  selector: 'app-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ counter }}</p>
             <button (click)="increment()">Increment</button>`
})
export class OnPushComponent {
  @Input() counter = 0;

  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
```

## 3. Manual Change Detection

Sometimes, we need more control. Angular provides `ChangeDetectorRef` to manually control detection.

### Methods:
- `markForCheck()` - marks path to root for checking in the next tick.
- `detectChanges()` - triggers change detection for the component and its children.
- `detach()` - detaches the component from Angular’s change detection tree.
- `reattach()` - reattaches it back.

### Example:
```ts
@Component({
  selector: 'app-manual',
  template: `<p>{{ time }}</p>`
})
export class ManualComponent implements OnInit, OnDestroy {
  time = new Date();
  intervalId: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.cd.detach();
    this.intervalId = setInterval(() => {
      this.time = new Date();
      this.cd.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    this.cd.reattach();
  }
}
```

## 4. Using `NgZone`

Angular uses `NgZone` to automatically detect asynchronous operations (e.g., setTimeout, HTTP). You can use `NgZone.runOutsideAngular()` to run code that shouldn't trigger change detection.

### Example:
```ts
@Component({
  selector: 'app-zone',
  template: `<p>{{ progress }}%</p>`
})
export class ZoneComponent {
  progress = 0;

  constructor(private zone: NgZone) {}

  startProcess() {
    this.zone.runOutsideAngular(() => {
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress % 10 === 0) {
          this.zone.run(() => {}); // triggers change detection
        }
        if (this.progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    });
  }
}
```

## 5. Signals (Angular 17+)

Angular Signals can be used for fine-grained reactivity. Signals enable automatic and precise change detection for reactive state.

### Example:
```ts
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal',
  template: `<p>Count: {{ count() }}</p>
             <button (click)="increment()">+</button>`
})
export class SignalComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
```

### Benefits:
- Fine-grained updates.
- Less boilerplate.
- Predictable reactivity.

---

## Summary Table

| Strategy         | When it Triggers                      | Use Case                          |
|------------------|----------------------------------------|------------------------------------|
| Default          | On every event, async operation        | Simplicity                         |
| OnPush           | Input changes, events in component     | Performance optimization           |
| Manual (Ref)     | Programmatically triggered             | Advanced performance control       |
| NgZone           | Custom async logic control             | Avoid unnecessary CD               |
| Signals          | Automatically on signal update         | Fine-grained reactivity (Angular 17+)|

---

> Change detection is at the heart of Angular performance. By choosing the right strategy, you can build efficient and scalable Angular applications.