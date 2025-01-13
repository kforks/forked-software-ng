import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faEnvelope = faEnvelope;
}
