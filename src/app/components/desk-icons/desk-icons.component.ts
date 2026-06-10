import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Shortcut {
  id: string;
  label: string;
  icon: 'home' | 'projects' | 'about' | 'resume' | 'contact';
  routerLink?: string;
  href?: string;
  download?: string;
}

@Component({
  selector: 'app-desk-icons',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <nav class="rt-icons" aria-label="Shortcuts">
      @for (s of shortcuts; track s.id) {
        @if (s.routerLink) {
          <a
            [routerLink]="s.routerLink"
            class="rt-ico"
            [class.is-active]="active === s.id"
          >
            <span class="rt-ico-glyph">
              <ng-container
                *ngTemplateOutlet="glyph; context: { $implicit: s.icon }"
              ></ng-container>
            </span>
            <span class="rt-ico-label">{{ s.label }}</span>
          </a>
        } @else {
          <a
            [href]="s.href"
            [attr.download]="s.download ?? null"
            class="rt-ico"
            [class.is-active]="active === s.id"
          >
            <span class="rt-ico-glyph">
              <ng-container
                *ngTemplateOutlet="glyph; context: { $implicit: s.icon }"
              ></ng-container>
            </span>
            <span class="rt-ico-label">{{ s.label }}</span>
          </a>
        }
      }
    </nav>

    <ng-template #glyph let-icon>
      @switch (icon) {
        @case ('home') {
          <span class="rt-ico-logo"
            ><img src="assets/wt-logo.svg" alt=""
          /></span>
        }
        @case ('projects') {
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="var(--rt-ink)"
            stroke-width="2.5"
          >
            <path d="M6 14h12l4 5h20v21H6z" fill="var(--rt-yellow)" />
          </svg>
        }
        @case ('about') {
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="var(--rt-ink)"
            stroke-width="2.5"
          >
            <rect
              x="6"
              y="8"
              width="36"
              height="26"
              rx="3"
              fill="var(--rt-blue)"
            />
            <rect
              x="12"
              y="13"
              width="24"
              height="13"
              fill="var(--rt-window)"
            />
            <path d="M18 40h12M24 34v6" />
          </svg>
        }
        @case ('resume') {
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="var(--rt-ink)"
            stroke-width="2.5"
          >
            <rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="2"
              fill="var(--rt-teal)"
            />
            <rect x="14" y="8" width="14" height="11" fill="var(--rt-window)" />
            <rect
              x="14"
              y="26"
              width="20"
              height="10"
              fill="var(--rt-window)"
            />
          </svg>
        }
        @case ('contact') {
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="var(--rt-ink)"
            stroke-width="2.5"
          >
            <rect
              x="6"
              y="11"
              width="36"
              height="26"
              rx="2"
              fill="var(--rt-orange)"
            />
            <path d="M7 13l17 13 17-13" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class DeskIconsComponent {
  @Input() active = '';

  readonly shortcuts: Shortcut[] = [
    { id: 'home', label: 'Home', icon: 'home', routerLink: '/home' },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'projects',
      routerLink: '/portfolio',
    },
    { id: 'about', label: 'About Me', icon: 'about', routerLink: '/about' },
    {
      id: 'resume',
      label: 'Résumé',
      icon: 'resume',
      href: 'assets/files/Resume2025.ForksKaitlyn.pdf',
      download: 'Kaitlyn_Forks_Resume.pdf',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: 'contact',
      href: 'mailto:kaitlynforks@gmail.com',
    },
  ];
}
