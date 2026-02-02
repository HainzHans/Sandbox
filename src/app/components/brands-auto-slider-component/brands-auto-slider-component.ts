import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-brands-auto-slider-component',
  imports: [
    MatIcon
  ],
  templateUrl: './brands-auto-slider-component.html',
  styleUrl: './brands-auto-slider-component.css',
})
export class BrandsAutoSliderComponent {

  brands = [
    { icon: 'bolt', name: 'BrandOne' },
    { icon: 'star', name: 'BrandTwo' },
    { icon: 'public', name: 'BrandThree' },
    { icon: 'rocket', name: 'BrandFour' },
    { icon: 'flash_on', name: 'BrandFive' }
  ];


}
