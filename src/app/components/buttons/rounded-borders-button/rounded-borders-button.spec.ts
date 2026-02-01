import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedBordersButton } from './rounded-borders-button';

describe('RoundedBordersButton', () => {
  let component: RoundedBordersButton;
  let fixture: ComponentFixture<RoundedBordersButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundedBordersButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedBordersButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
