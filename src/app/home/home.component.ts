import { Component } from '@angular/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
