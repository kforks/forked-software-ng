import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private activeTheme = 'theme-light'; // Default theme (orange-forward)

  // Define available themes
  private themes = [
    { name: 'Light Mode', class: 'theme-light' },
    { name: 'Dark Mode', class: 'theme-dark' },
  ];

  constructor() {
    const savedTheme =
      localStorage.getItem('selectedTheme') || this.activeTheme;
    this.setTheme(savedTheme);
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
