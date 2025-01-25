import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faShare, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MatTooltip } from '@angular/material/tooltip';
import {
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
} from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from '../services/theming.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatIconButton,
    FaIconComponent,
    FontAwesomeModule,
    MatTooltip,
    NgIf,
    NgOptimizedImage,
    MatMenuModule,
    NgForOf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faShare = faShare;
  protected readonly faPaintRoller = faPaintRoller;
  navLinks: Array<{ label: string; url: string }> = [
    { label: 'Portfolio', url: '/portfolio' },
    { label: 'About', url: '/portfolio' },
  ];
  themes: Array<{ name: string; class: string }> = [];
  breadcrumbs: Array<{ label: string; url: string }> = [];
  currentTheme: string;
  isMobile: boolean = false;
  onHomePage: boolean = true;
  activeLink: string = '';

  constructor(
    private themeService: ThemeService,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.currentTheme = this.themeService.getActiveTheme();
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe({
        next: (result) => (this.isMobile = result.matches),
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = this.router.url;
        this.updateBreadcrumbs();
      }
    });
  }

  ngOnInit(): void {
    this.updateThemeList();
    this.updateBreadcrumbs();
  }

  selectTheme(themeClass: string): void {
    this.themeService.setTheme(themeClass);
    this.currentTheme = themeClass;
    this.updateThemeList();
  }

  private updateThemeList(): void {
    this.themes = this.themeService.getAvailableThemes();
  }

  private updateBreadcrumbs(): void {
    const root = this.activatedRoute.root;
    const breadcrumbs: Array<{ label: string; url: string }> = [];
    let url = '';

    this.onHomePage = this.router.url === '/home' || this.router.url === '/';

    // Always add the "Home" breadcrumb
    breadcrumbs.push({ label: 'Home', url: '/home' });

    // Loop through child routes to build the breadcrumb trail
    root.children.forEach((route) => {
      const routeConfig = route.routeConfig;
      if (routeConfig && routeConfig.path) {
        url += `/${routeConfig.path}`;
        breadcrumbs.push({ label: this.capitalize(routeConfig.path), url });
      }
    });

    this.breadcrumbs = breadcrumbs;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  copyUrlToClipboard(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        alert('URL copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy URL: ', err);
      },
    );
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/kaitlyn-forks/', '_blank');
  }
}
