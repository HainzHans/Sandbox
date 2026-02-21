import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentSlotCardComponent } from './admin-appointment-slot-card-component';

describe('AdminAppointmentSlotCardComponent', () => {
  let component: AdminAppointmentSlotCardComponent;
  let fixture: ComponentFixture<AdminAppointmentSlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentSlotCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppointmentSlotCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
