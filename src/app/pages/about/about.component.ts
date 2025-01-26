import { Component } from '@angular/core';
import { StrengthsCarouselComponent } from '../../components/strengths-carousel/strengths-carousel.component';

@Component({
  selector: 'app-about',
  imports: [StrengthsCarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
