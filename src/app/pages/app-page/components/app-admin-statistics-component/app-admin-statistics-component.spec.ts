import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminStatisticsComponent } from './app-admin-statistics-component';

describe('AppAdminStatisticsComponent', () => {
  let component: AppAdminStatisticsComponent;
  let fixture: ComponentFixture<AppAdminStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAdminStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAdminStatisticsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
