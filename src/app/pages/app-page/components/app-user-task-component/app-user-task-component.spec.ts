import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserTaskComponent } from './app-user-task-component';

describe('AppUserTaskComponent', () => {
  let component: AppUserTaskComponent;
  let fixture: ComponentFixture<AppUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserTaskComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
