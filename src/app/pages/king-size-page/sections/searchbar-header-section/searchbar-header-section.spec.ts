import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarHeaderSection } from './searchbar-header-section';

describe('SearchbarHeaderSection', () => {
  let component: SearchbarHeaderSection;
  let fixture: ComponentFixture<SearchbarHeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarHeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarHeaderSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
