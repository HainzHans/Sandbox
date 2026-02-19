import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStepsComponent } from './appointment-steps-component';

describe('AppointmentStepsComponent', () => {
  let component: AppointmentStepsComponent;
  let fixture: ComponentFixture<AppointmentStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentStepsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
