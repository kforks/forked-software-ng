import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faExclamationTriangle,
  faShare,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  imports: [FaIconComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  protected readonly faShare = faShare;
  protected readonly faExclamationTriangle = faExclamationTriangle;
  protected readonly faSkullCrossbones = faSkullCrossbones;
}
