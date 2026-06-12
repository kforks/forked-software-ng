import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeskIconsComponent } from '../../../components/desk-icons/desk-icons.component';
import { TaskbarComponent } from '../../../components/taskbar/taskbar.component';

type Category = 'Just for fun' | 'Past clients';

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
  // order: fun on top, clients below
  readonly categories: Category[] = ['Just for fun', 'Past clients'];

  readonly projects: Project[] = [
    // ── Just for fun ──
    {
      name: 'Tank STL',
      tagline:
        'My maker-studio site — events, a build journal, and a 24/7 live aquarium cam, all on a self-hosted stack.',
      tech: ['React', 'Vite', 'Tailwind', 'Cloudflare'],
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
      name: 'Throughline Productivity',
      tagline:
        'A voice-first iOS app for capturing tasks and staying on top of your week. Currently in beta.',
      tech: ['Swift', 'SwiftUI', 'iOS'],
      status: 'Building',
      category: 'Just for fun',
      url: 'https://throughlineproductivity.com/',
      preview: 'assets/previews/throughline.png',
    },
    // ── Past clients ──
    {
      name: 'Fennel',
      tagline:
        'Booking + operations platform for a small-business cooking studio running culinary classes — built and self-hosted end to end.',
      tech: ['Next.js', 'Prisma', 'Postgres', 'Raspberry Pi'],
      status: 'Live',
      category: 'Past clients',
      url: 'https://fennel.forkedsoftware.com',
      preview: 'assets/previews/fennel.png',
    },
    {
      name: 'Spite House Studios',
      tagline:
        'Initial build for the indie game studio behind "I Would Kill Hitler" — the game that raised big on Kickstarter.',
      tech: [],
      status: 'Live',
      category: 'Past clients',
      url: 'https://spitehousestudios.com/',
      preview: 'assets/previews/spite-house.png',
    },
    {
      name: 'Two Beer Cinema Club',
      tagline:
        'A movie-club + craft-beer community site — screening schedule, member picks, and sign-ups.',
      tech: ['Vite', 'React', 'GitHub Pages'],
      status: 'Live',
      category: 'Past clients',
      preview: 'assets/previews/2bcc.png',
    },
  ];

  projectsIn(category: Category): Project[] {
    return this.projects.filter((p) => p.category === category);
  }
}
