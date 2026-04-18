import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, NgIf, RouterLink],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent {
  isMobile: boolean = false;

  constructor(private readonly screenSizeService: ScreenSizeService) {
    this.screenSizeService.isMobile$.subscribe({
      next: (isMobile) => (this.isMobile = isMobile),
      error: (err) => console.error('Error observing screen size:', err),
      complete: () => console.log('Screen size observation completed.'),
    });
  }
}
