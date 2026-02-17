import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavButtonComponent } from './app-side-nav-button-component';

describe('AppSideNavButtonComponent', () => {
  let component: AppSideNavButtonComponent;
  let fixture: ComponentFixture<AppSideNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSideNavButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSideNavButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
