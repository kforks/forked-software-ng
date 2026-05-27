import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PreviewHeroComponent } from './pages/preview-hero/preview-hero.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'preview-hero', component: PreviewHeroComponent },
  { path: '**', redirectTo: 'home' }, // Wildcard fallback will override, always goes on bottom
];
