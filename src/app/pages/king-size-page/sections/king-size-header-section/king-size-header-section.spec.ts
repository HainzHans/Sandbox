import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingSizeHeaderSection } from './king-size-header-section';

describe('KingSizeHeaderSection', () => {
  let component: KingSizeHeaderSection;
  let fixture: ComponentFixture<KingSizeHeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingSizeHeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingSizeHeaderSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
