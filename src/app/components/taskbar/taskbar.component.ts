import { Component, Input, OnDestroy, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }
  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
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
