import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseourceDemoComponent } from './reseource-demo.component';

describe('ReseourceDemoComponent', () => {
  let component: ReseourceDemoComponent;
  let fixture: ComponentFixture<ReseourceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReseourceDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseourceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
