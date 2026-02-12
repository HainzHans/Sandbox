import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSection } from './overview-section';

describe('OverviewSection', () => {
  let component: OverviewSection;
  let fixture: ComponentFixture<OverviewSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
