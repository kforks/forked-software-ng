import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../services/theming.service';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

interface NavLink {
  label: string;
  url: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FaIconComponent,
    FontAwesomeModule,
    NgIf,
    NgClass,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faAdjust = faAdjust;

  navLinks: NavLink[] = [
    { label: 'HOME', url: '/home' },
    { label: 'PROJECTS', url: '/portfolio' },
    { label: 'ABOUT', url: '/about' },
    { label: 'SERVICES', url: '/services', disabled: true },
  ];

  currentRoute = '/home';
  timestamp = '';
  private timer?: ReturnType<typeof setInterval>;

  constructor(
    private readonly themeService: ThemeService,
    private readonly router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }

  ngOnInit(): void {
    this.updateTimestamp();
    this.timer = setInterval(() => this.updateTimestamp(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  toggleTheme(): void {
    const active = this.themeService.getActiveTheme();
    const next = active === 'theme-dark' ? 'theme-light' : 'theme-dark';
    this.themeService.setTheme(next);
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/kaitlyn-forks/', '_blank');
  }

  routeLabel(): string {
    const r = this.currentRoute.replace(/^\//, '').split('?')[0].toUpperCase();
    return r === '' ? 'HOME' : r;
  }

  private updateTimestamp(): void {
    this.timestamp =
      new Date().toISOString().replace('T', ' ').slice(0, 19) + 'Z';
  }
}
