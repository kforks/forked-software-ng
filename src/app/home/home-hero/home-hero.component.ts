import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-hero',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {}
