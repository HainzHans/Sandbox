import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconButtonComponent } from './app-icon-button-component';

describe('AppIconButtonComponent', () => {
  let component: AppIconButtonComponent;
  let fixture: ComponentFixture<AppIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIconButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
