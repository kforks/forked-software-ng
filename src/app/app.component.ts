import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  isSmallScreen: boolean = false;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((resp: { breakpoints: { [x: string]: unknown } }) => {
        this.isSmallScreen = Object.keys(resp.breakpoints).some(
          (a) => resp.breakpoints[a],
        );
      });
  }
}
