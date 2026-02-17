import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeSection } from './app-home-section';

describe('AppHomeSection', () => {
  let component: AppHomeSection;
  let fixture: ComponentFixture<AppHomeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHomeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHomeSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
