import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHeaderComponent } from './overview-header-component';

describe('OverviewHeaderComponent', () => {
  let component: OverviewHeaderComponent;
  let fixture: ComponentFixture<OverviewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
