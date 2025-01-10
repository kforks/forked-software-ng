import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() // private authService: AuthenticationService, // public spinnerService: SpinnerService, // readonly themeService: ThemeService
  // private authGuard: AuthGuard
  {}
}
