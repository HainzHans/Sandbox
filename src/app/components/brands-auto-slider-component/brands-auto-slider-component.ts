import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-auto-slider-component',
  imports: [],
  templateUrl: './brands-auto-slider-component.html',
  styleUrl: './brands-auto-slider-component.css',
})
export class BrandsAutoSliderComponent {

  brands = [
    { icon: 'microsoft', name: 'BrandOne' },
    { icon: 'star', name: 'BrandTwo' },
    { icon: 'globe', name: 'BrandThree' },
    { icon: 'apple', name: 'BrandFour' },
    { icon: 'google', name: 'BrandFive' }
  ];


}
