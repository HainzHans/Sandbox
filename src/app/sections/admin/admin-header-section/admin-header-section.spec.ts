import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderSection } from './admin-header-section';

describe('AdminHeaderSection', () => {
  let component: AdminHeaderSection;
  let fixture: ComponentFixture<AdminHeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
