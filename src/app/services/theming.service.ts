import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private activeTheme = 'theme-light'; // light-only

  // Define available themes (dark mode retired)
  private themes = [{ name: 'Light Mode', class: 'theme-light' }];

  constructor() {
    this.setTheme('theme-light');
  }

  setTheme(themeClass: string): void {
    const body = document.body;
    body.classList.remove(...this.themes.map((theme) => theme.class));
    body.classList.add(themeClass);
    localStorage.setItem('selectedTheme', themeClass);
    this.activeTheme = themeClass;
  }

  getActiveTheme(): string {
    return this.activeTheme;
  }

  getAvailableThemes(): Array<{ name: string; class: string }> {
    // Return all themes except the currently active one
    return this.themes.filter((theme) => theme.class !== this.activeTheme);
  }
}
