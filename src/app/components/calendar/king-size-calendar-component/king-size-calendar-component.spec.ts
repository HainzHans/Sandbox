import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingSizeCalendarComponent } from './king-size-calendar-component';

describe('KingSizeCalendarComponent', () => {
  let component: KingSizeCalendarComponent;
  let fixture: ComponentFixture<KingSizeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingSizeCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingSizeCalendarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
