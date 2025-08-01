import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndDemoComponent } from './dnd-demo.component';

describe('DndDemoComponent', () => {
  let component: DndDemoComponent;
  let fixture: ComponentFixture<DndDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DndDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
