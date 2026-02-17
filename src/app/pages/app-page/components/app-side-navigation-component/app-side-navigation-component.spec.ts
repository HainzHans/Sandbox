import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavigationComponent } from './app-side-navigation-component';

describe('AppSideNavigationComponent', () => {
  let component: AppSideNavigationComponent;
  let fixture: ComponentFixture<AppSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSideNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSideNavigationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
