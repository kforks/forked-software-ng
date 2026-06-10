import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeskIconsComponent } from '../../../components/desk-icons/desk-icons.component';
import { TaskbarComponent } from '../../../components/taskbar/taskbar.component';

type Category = 'Just for fun' | 'Past clients' | 'Day job';

interface Project {
  name: string;
  tagline: string;
  tech: string[];
  status: 'Live' | 'Building' | 'Planned';
  category: Category;
  url?: string;
  preview?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, DeskIconsComponent, TaskbarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  // order: fun on top, clients in the middle, day job at the bottom
  readonly categories: Category[] = ['Just for fun', 'Past clients', 'Day job'];

  readonly projects: Project[] = [
    // ── Just for fun ──
    {
      name: 'Tank STL',
      tagline:
        'My maker-studio site — events, a build journal, and a 24/7 live aquarium cam, all on a self-hosted stack.',
      tech: ['Angular', 'Cloudflare Pages'],
      status: 'Live',
      category: 'Just for fun',
      url: 'https://tankstl.com',
      preview: 'assets/previews/tank-stl.png',
    },
    {
      name: 'Tank Cam',
      tagline:
        'A 24/7 livestream of my planted aquarium, relayed from Raspberry Pi cameras to the web.',
      tech: ['Pi Zero 2 W', 'MediaMTX', 'RTSP'],
      status: 'Building',
      category: 'Just for fun',
    },
    {
      name: 'Leaf Swap',
      tagline:
        'A neighborhood plant-swap marketplace for local growers to trade cuttings and clippings.',
      tech: ['Next.js', 'Postgres'],
      status: 'Planned',
      category: 'Just for fun',
    },
    // ── Past clients ──
    {
      name: 'Fennel',
      tagline:
        'Reservation + back-of-house operations platform for a chef-run supper club — built and self-hosted end to end.',
      tech: ['Next.js', 'Prisma', 'Postgres', 'Raspberry Pi'],
      status: 'Live',
      category: 'Past clients',
      url: 'https://fennel.forkedsoftware.com',
      preview: 'assets/previews/fennel.png',
    },
    {
      name: 'Two Beer Cinema Club',
      tagline:
        'A movie-club + craft-beer community site — screening schedule, member picks, and sign-ups.',
      tech: ['Vite', 'React', 'GitHub Pages'],
      status: 'Live',
      category: 'Past clients',
    },
    {
      name: 'Precision Learning Partners',
      tagline:
        'Website for an education / tutoring consultancy. (TODO: confirm the details with me.)',
      tech: ['TODO'],
      status: 'Live',
      category: 'Past clients',
    },
    // ── Day job ── (placeholders — Kaitlyn will add proud work projects later)
  ];

  projectsIn(category: Category): Project[] {
    return this.projects.filter((p) => p.category === category);
  }
}
