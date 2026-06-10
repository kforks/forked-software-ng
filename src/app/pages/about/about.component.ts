import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeskIconsComponent } from '../../components/desk-icons/desk-icons.component';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';

interface Milestone {
  when: string;
  title: string;
  place: string;
  blurb: string;
}

interface Strength {
  rank: number;
  title: string;
  blurb: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, DeskIconsComponent, TaskbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // Career timeline — present at the top, going down into the past.
  // Drafted from Kaitlyn's public LinkedIn; refine with real blips.
  readonly timeline: Milestone[] = [
    {
      when: 'Now',
      title: 'Software Engineer & Consultant',
      place: 'Forked Software · Tank STL — St. Louis',
      blurb:
        'Building small-shop production systems end-to-end, and helping the people who run them decide what to build next.',
    },
    {
      when: '2021 →',
      title: 'Admin → Junior Software Engineer',
      place: 'Varsity Tutors',
      blurb:
        'Started in an admin role — then used browser dev tools and a for-loop to automate ~4 hours of my daily work. That stunt got me moved onto the engineering team as a junior dev.',
    },
    {
      when: '2020–21',
      title: 'LaunchCode',
      place: 'coding immersion',
      blurb: 'The pivot — traded the classroom for the codebase.',
    },
    {
      when: '2019–20',
      title: 'Science Teacher',
      place: 'Missouri · certified, General Science',
      blurb:
        'Taught science — and got very good at explaining hard things simply.',
    },
    {
      when: '2016',
      title: 'Published biologist',
      place: 'peer-reviewed research',
      blurb:
        'Co-authored frog-disease research. The weird, wonderful root of the whole journey.',
    },
  ];

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
