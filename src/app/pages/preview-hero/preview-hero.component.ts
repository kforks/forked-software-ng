import { Component } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Mission {
  id: string;
  code: string;
  name: string;
  status: 'ACTIVE' | 'IN_DEV' | 'PLANNED' | 'LIVE';
  tech: string[];
  blurb?: string;
  url?: string;
}

interface AccessPoint {
  id: string;
  label: string;
  caption: string;
  href?: string;
  routerLink?: string;
  icon: 'download' | 'journey' | 'services' | 'projects' | 'portal' | 'mail';
  emphasis?: 'hot';
  disabled?: boolean;
}

@Component({
  selector: 'app-preview-hero',
  standalone: true,
  imports: [NgOptimizedImage, NgTemplateOutlet, RouterLink],
  templateUrl: './preview-hero.component.html',
  styleUrls: ['./preview-hero.component.scss'],
})
export class PreviewHeroComponent {
  readonly now = new Date().toISOString().replace('T', ' ').slice(0, 19) + 'Z';

  readonly missions: Mission[] = [
    {
      id: 'fennel',
      code: 'OP-0042',
      name: 'FENNEL',
      status: 'ACTIVE',
      tech: ['NEXT.JS', 'PRISMA', 'POSTGRES', 'PI'],
      blurb: 'Bookable cooking classes platform. Live engagement.',
      url: 'https://fennel.kitchen',
    },
    {
      id: 'tank-stl',
      code: 'OP-0038',
      name: 'TANK-STL',
      status: 'LIVE',
      tech: ['ANGULAR', 'PAGES'],
      blurb: 'Local STL event hub. Cloudflare-hosted SPA.',
      url: 'https://tankstl.com',
    },
    {
      id: 'tank-cam',
      code: 'OP-0044',
      name: 'TANK-CAM',
      status: 'IN_DEV',
      tech: ['PI ZERO 2W', 'MEDIAMTX', 'RTSP'],
      blurb: 'Live aquarium stream relay. Pi camera → HLS.',
    },
    {
      id: 'leaf-swap',
      code: 'OP-0045',
      name: 'LEAF-SWAP',
      status: 'PLANNED',
      tech: ['NEXT.JS', 'POSTGRES'],
      blurb: 'STL plant-trade community. Scaffold pending.',
    },
    {
      id: 'forked-software',
      code: 'OP-0001',
      name: 'FORKED.SOFTWARE',
      status: 'ACTIVE',
      tech: ['ANGULAR 19', 'PAGES'],
      blurb: 'This site. Home base + client demo hub.',
      url: 'https://forkedsoftware.com',
    },
  ];

  readonly accessPoints: AccessPoint[] = [
    {
      id: 'resume',
      label: 'GET RESUME',
      caption: 'PDF · UPDATED 2025',
      href: 'assets/files/Resume2025.ForksKaitlyn.pdf',
      icon: 'download',
      emphasis: 'hot',
    },
    {
      id: 'about',
      label: 'MY JOURNEY',
      caption: 'CAREER ARC · DOSSIER',
      routerLink: '/about',
      icon: 'journey',
    },
    {
      id: 'services',
      label: 'WHAT I OFFER',
      caption: 'CONSULTING · SERVICES',
      routerLink: '/services',
      icon: 'services',
      disabled: true,
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      caption: 'CASE STUDIES · DEMOS',
      routerLink: '/portfolio',
      icon: 'projects',
    },
    {
      id: 'portal',
      label: 'CLIENT PORTAL',
      caption: 'ACTIVE ENGAGEMENT ACCESS',
      icon: 'portal',
      disabled: true,
    },
    {
      id: 'mail',
      label: 'OPEN COMMS',
      caption: 'DIRECT LINE · EMAIL',
      href: 'mailto:kaitlynforks@gmail.com',
      icon: 'mail',
      emphasis: 'hot',
    },
  ];

  statusColor(status: Mission['status']): string {
    return status === 'ACTIVE' || status === 'LIVE' ? 'hot' : 'cool';
  }
}
