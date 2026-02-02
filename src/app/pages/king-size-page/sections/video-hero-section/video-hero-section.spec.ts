import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHeroSection } from './video-hero-section';

describe('VideoHeroSection', () => {
  let component: VideoHeroSection;
  let fixture: ComponentFixture<VideoHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHeroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
