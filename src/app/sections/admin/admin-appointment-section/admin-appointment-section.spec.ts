import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentSection } from './admin-appointment-section';

describe('AdminAppointmentSection', () => {
  let component: AdminAppointmentSection;
  let fixture: ComponentFixture<AdminAppointmentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppointmentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
