import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseSection } from './analyse-section';

describe('AnalyseSection', () => {
  let component: AnalyseSection;
  let fixture: ComponentFixture<AnalyseSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
