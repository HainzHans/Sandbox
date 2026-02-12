import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeOfDaySection } from './trade-of-day-section';

describe('TradeOfDaySection', () => {
  let component: TradeOfDaySection;
  let fixture: ComponentFixture<TradeOfDaySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeOfDaySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeOfDaySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
