import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserStatisticsComponent } from './app-user-statistics-component';

describe('AppUserStatisticsComponent', () => {
  let component: AppUserStatisticsComponent;
  let fixture: ComponentFixture<AppUserStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserStatisticsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
