import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTestPage } from './grid-test-page';

describe('GridTestPage', () => {
  let component: GridTestPage;
  let fixture: ComponentFixture<GridTestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTestPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTestPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
