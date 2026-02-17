import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminSection } from './app-admin-section';

describe('AppAdminSection', () => {
  let component: AppAdminSection;
  let fixture: ComponentFixture<AppAdminSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAdminSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAdminSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
