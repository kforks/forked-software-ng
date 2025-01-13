import { Component } from '@angular/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
