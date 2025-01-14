import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'kaitlyn-forks';
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
