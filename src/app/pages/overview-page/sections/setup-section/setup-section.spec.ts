import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSection } from './setup-section';

describe('SetupSection', () => {
  let component: SetupSection;
  let fixture: ComponentFixture<SetupSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
