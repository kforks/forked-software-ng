import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf, NgOptimizedImage, NgSwitch, NgSwitchCase } from '@angular/common';

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
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faShare = faShare;
  private hoverTimeout: any;
  activePrimaryLink: string | null = null; // Tracks active primary nav link
  activeSecondaryLink: string | null = null; // Tracks secondary nav activity

  constructor() {}

  copyUrlToClipboard(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        alert('URL copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy URL: ', err);
      }
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
      this.activePrimaryLink = null;
      this.activeSecondaryLink = null; // Reset both states after delay
    }, 600); // Adjust delay as needed
  }

  setSecondaryLink(link: string): void {
    this.activeSecondaryLink = link;
  }

  clearSecondaryLink(): void {
    this.activeSecondaryLink = this.activePrimaryLink; // Fallback to primary link
  }
}
