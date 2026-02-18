import {AfterViewInit, Component, input} from '@angular/core';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';

@Component({
  selector: 'app-hero-section',
  imports: [
    KingSizeButton
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements AfterViewInit{

  videoUrl = input<string>('');
  introText = input<string>('');
  titleLine1 = input<string>('');
  titleLine2 = input<string>('');
  subTitleLine1 = input<string>('');
  subTitleLine2 = input<string>('');
  displayButton = input<boolean>(true);
  height = input<string>('');


  ngAfterViewInit() {
    const video = document.querySelector('.video-background') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }

}
