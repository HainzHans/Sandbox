import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInput } from './standard-input';

describe('StandardInput', () => {
  let component: StandardInput;
  let fixture: ComponentFixture<StandardInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
