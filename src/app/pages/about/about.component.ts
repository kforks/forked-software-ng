import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DeskIconsComponent } from '../../components/desk-icons/desk-icons.component';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';

type FileIcon = 'app' | 'floppy' | 'disk' | 'folder' | 'bio';

interface Milestone {
  when: string;
  title: string;
  place: string;
  blurb: string;
  photo: string;
  alt: string;
  file: string; // the "filename" shown in the explorer tree
  icon: FileIcon; // which line-art file icon to draw
  why: string; // one-line "why it matters" shown before the file is opened
}

interface Strength {
  rank: number;
  title: string;
  blurb: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, DeskIconsComponent, TaskbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // Career timeline — present at the top, going down into the past.
  // Drafted from Kaitlyn's public LinkedIn; refine with real blips.
  readonly timeline: Milestone[] = [
    {
      when: 'Now',
      title: 'Senior Software Engineer, Consultant & Entrepreneur',
      place: 'Forked Software · Tank STL — St. Louis',
      blurb:
        'Building small-shop production systems end-to-end, and helping the people who run them decide what to build next.',
      photo: 'assets/images/timeline/now-present-day.jpg',
      alt: 'Kaitlyn outdoors in a cap and work shirt, hands dirty from a build',
      file: 'now.app',
      icon: 'app',
      why: 'Where the whole path points now — building and running small-shop systems end to end.',
    },
    {
      when: '2021',
      title: 'Admin → Junior Dev',
      place: 'Varsity Tutors',
      blurb:
        'Started in an admin role — then used browser dev tools and a for-loop to automate ~4 hours of my daily work. That stunt got me moved onto the engineering team as a junior dev.',
      photo: 'assets/images/timeline/2021-engineer.jpg',
      alt: 'Kaitlyn in a beanie, studio portrait',
      file: 'the-for-loop.exe',
      icon: 'floppy',
      why: 'Proof you can code your way out of a job description — the stunt that made me a dev.',
    },
    {
      when: '2020–21',
      title: 'LaunchCode',
      place: 'coding immersion',
      blurb: 'The pivot — traded the classroom for the codebase.',
      photo: 'assets/images/timeline/comedy.jpg',
      alt: 'Kaitlyn smiling at a comedy festival',
      file: 'launchcode.dmg',
      icon: 'disk',
      why: 'The clean install — wiped the teacher, booted up the engineer.',
    },
    {
      when: '2019–20',
      title: 'Science Teacher',
      place: 'Missouri · certified, General Science',
      blurb:
        'Taught science — and got very good at explaining hard things simply.',
      photo: 'assets/images/timeline/terrarium.jpg',
      alt: 'Kaitlyn in overalls building a glass terrarium',
      file: 'classroom/',
      icon: 'folder',
      why: 'Where I learned to explain hard things simply — still my favorite debugging skill.',
    },
    {
      when: '2016',
      title: 'Published biologist',
      place: 'peer-reviewed research',
      blurb:
        'Co-authored frog-disease research with the USGS — and where I first learned to code, building hierarchical population models in Stella and R. The weird, wonderful root of it all.',
      photo: 'assets/images/timeline/biologist.jpg',
      alt: 'Kaitlyn holding a young alligator during field research',
      file: 'biologist.bio',
      icon: 'bio',
      why: 'The root directory — frogs, field data, and my first real code.',
    },
  ];

  // ── file-explorer state: which file is selected, and whether it's "opened" ──
  selected = 0;
  opened = false;

  get current(): Milestone {
    return this.timeline[this.selected];
  }
  selectFile(i: number): void {
    if (i === this.selected) return;
    this.selected = i;
    this.opened = false; // new file starts closed — show "why" + Open button
  }
  openFile(): void {
    this.opened = true;
  }

  // CliftonStrengths Top 5
  readonly strengths: Strength[] = [
    {
      rank: 1,
      title: 'Strategic',
      blurb:
        'A natural problem-solver — finds the pattern in complexity and charts the best path forward.',
    },
    {
      rank: 2,
      title: 'Woo',
      blurb:
        'Winning others over: connects easily with new people and turns introductions into real conversations.',
    },
    {
      rank: 3,
      title: 'Positivity',
      blurb: 'Relentless, contagious optimism that keeps a team’s morale high.',
    },
    {
      rank: 4,
      title: 'Developer',
      blurb:
        'Invested in helping others grow — gets real satisfaction from the whole team succeeding.',
    },
    {
      rank: 5,
      title: 'Empathy',
      blurb:
        'Senses what others are feeling and offers genuine understanding and support.',
    },
  ];

  strengthIndex = 0;

  get visibleStrengths(): Strength[] {
    return [0, 1, 2].map(
      (i) => this.strengths[(this.strengthIndex + i) % this.strengths.length],
    );
  }
  nextStrength(): void {
    this.strengthIndex = (this.strengthIndex + 1) % this.strengths.length;
  }
  prevStrength(): void {
    this.strengthIndex =
      (this.strengthIndex - 1 + this.strengths.length) % this.strengths.length;
  }
}
