import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {faCodeFork, faMicrochip} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
    selector: 'app-nav',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatIconButton,
    FaIconComponent,
    FontAwesomeModule,
    MatTooltip
  ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
  protected readonly faLinkedin = faLinkedin;

  copyUrlToClipboard(): void {
    const url = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(url).then(
      () => {
        alert('URL copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy URL: ', err);
      }
    );
  }

  // Function to open LinkedIn profile
  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/kaitlyn-forks/', '_blank'); // Opens in a new tab
  }

  protected readonly faCodeFork = faCodeFork;
  protected readonly faMicrochip = faMicrochip;
}
