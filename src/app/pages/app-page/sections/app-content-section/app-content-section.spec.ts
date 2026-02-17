import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentSection } from './app-content-section';

describe('AppContentSection', () => {
  let component: AppContentSection;
  let fixture: ComponentFixture<AppContentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContentSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
