import {AfterViewInit, Component, input} from '@angular/core';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {SmallDotComponent} from '../../../components/small-dot-component/small-dot-component';
import {MainChipComponent} from '../../../components/main-chip-component/main-chip-component';

@Component({
  selector: 'app-hero-section',
  imports: [
    KingSizeButton,
    SmallDotComponent,
    MainChipComponent
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
