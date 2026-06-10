import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theming.service';
import { DeskIconsComponent } from '../../components/desk-icons/desk-icons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DeskIconsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
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

  private tick(): void {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    this.clock = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
