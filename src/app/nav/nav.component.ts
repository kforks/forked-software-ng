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
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';

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
    NgSwitch,
    NgSwitchCase,
    NgIf,
    NgOptimizedImage,
    MatMenuModule,
    NgForOf,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faShare = faShare;
  protected readonly faPaintRoller = faPaintRoller;
  private hoverTimeout: any;
  activePrimaryLink: string | null = null;
  activeSecondaryLink: string | null = null;
  isHovering = false;
  showSecondaryNav = false; // hiding secondary nav until needed
  fullThemesList: Array<{ name: string; class: string }> = [];
  themes: Array<{ name: string; class: string }> = [];

  constructor() {}

  async ngOnInit(): Promise<void> {
    await this.loadThemes();
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme-dark';
    this.themes = this.fullThemesList.filter(
      (theme) => theme.class !== savedTheme,
    );
  }

  async loadThemes(): Promise<void> {
    try {
      const response = await fetch('assets/files/themes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.fullThemesList = data.themes;
    } catch (error) {
      console.error('Error loading themes:', error);
    }
  }

  selectTheme(themeClass: string): void {
    const body = document.body;
    body.classList.remove(...this.fullThemesList.map((theme) => theme.class));
    body.classList.add(themeClass);
    localStorage.setItem('selectedTheme', themeClass);
    this.themes = this.fullThemesList.filter(
      (theme) => theme.class !== themeClass,
    );
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

  setPrimaryLink(link: string | null): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    this.activePrimaryLink = link;
    this.activeSecondaryLink = link;
  }

  delayedClearPrimaryLink(): void {
    this.hoverTimeout = setTimeout(() => {
      if (!this.isHovering) {
        this.activePrimaryLink = null;
        this.activeSecondaryLink = null;
      }
    }, 300);
  }

  enterNav(): void {
    this.isHovering = true;
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  leaveNav(): void {
    this.isHovering = false;
    this.delayedClearPrimaryLink();
  }
}
