import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theming.service';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  template: `
    <footer class="rt-taskbar">
      <button type="button" class="rt-start" (click)="goHome()">
        ◈ forked
      </button>
      <span class="rt-tab">{{ tab }}</span>
      <span class="rt-spacer"></span>
      <button
        type="button"
        class="rt-tb-btn"
        (click)="toggleTheme()"
        aria-label="Toggle light/dark"
      >
        ◐ theme
      </button>
      <a
        class="rt-tb-btn"
        href="https://www.linkedin.com/in/kaitlyn-forks/"
        target="_blank"
        rel="noreferrer"
        >in</a
      >
      <span class="rt-clock">{{ clock }}</span>
    </footer>
  `,
})
export class TaskbarComponent implements OnInit, OnDestroy {
  @Input() tab = 'welcome';
  clock = '';
  private timer?: ReturnType<typeof setInterval>;

  constructor(private readonly theme: ThemeService) {}

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }
  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  toggleTheme(): void {
    const active = this.theme.getActiveTheme();
    this.theme.setTheme(active === 'theme-dark' ? 'theme-light' : 'theme-dark');
  }

  goHome(): void {
    window.location.assign('/home');
  }

  private tick(): void {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    this.clock = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
