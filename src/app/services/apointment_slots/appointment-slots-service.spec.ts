import { TestBed } from '@angular/core/testing';

import { AppointmentSlotsService } from './appointment-slots-service';

describe('AppointmentSlotsService', () => {
  let service: AppointmentSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
