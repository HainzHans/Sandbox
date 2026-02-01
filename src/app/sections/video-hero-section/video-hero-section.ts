import {AfterViewInit, Component} from '@angular/core';
import {RoundedBordersButton} from '../../components/buttons/rounded-borders-button/rounded-borders-button';

@Component({
  selector: 'app-video-hero-section',
  imports: [
    RoundedBordersButton
  ],
  templateUrl: './video-hero-section.html',
  styleUrl: './video-hero-section.css',
})
export class VideoHeroSection implements AfterViewInit{

  ngAfterViewInit() {
    const video = document.querySelector('.video-background') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }

}
