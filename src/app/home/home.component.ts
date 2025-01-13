import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { StrengthsCarouselComponent } from '../strengths-carousel/strengths-carousel.component';

@Component({
  selector: 'app-home',
  imports: [MatCard, StrengthsCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {} // private authGuard: AuthGuard // private authService: AuthenticationService, // public spinnerService: SpinnerService, // readonly themeService: ThemeService
}
