import { Component, OnDestroy } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    imports: [HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
})
export class AppComponent implements OnDestroy {
  title = 'kaitlyn-forks';
  currentTheme!: string;
  isSmallScreen: boolean = false;

  private themeSubscription!: Subscription;
  constructor(
    // public themeService: ThemeService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((resp: { breakpoints: { [x: string]: unknown; }; }) => {
        this.isSmallScreen = Object.keys(resp.breakpoints).some(a => resp.breakpoints[a]);
      });

    // this.themeSubscription = this.themeService
    //   .getCurrentTheme()
    //   .subscribe((theme: string) => {
    //     this.currentTheme = theme;
    //   });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}


