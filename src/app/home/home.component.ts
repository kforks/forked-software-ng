import {Component} from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
    selector: 'app-home',
    imports: [
        NavComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    // readonly themeService: ThemeService
    // public spinnerService: SpinnerService,
    // private authService: AuthenticationService,
    // private authGuard: AuthGuard
  ) {}
}
