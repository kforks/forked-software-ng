import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { NgForOf } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import {
  faCaretLeft,
  faCaretRight,
  faChess,
  faHandshake,
  faLaughBeam,
  faPeopleRoof,
  faPersonChalkboard,
  faTrophy,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-strengths-carousel',
  templateUrl: './strengths-carousel.component.html',
  styleUrls: ['./strengths-carousel.component.scss'],
  imports: [
    NgForOf,
    MatCard,
    FaIconComponent,
    MatIconButton,
    MatTooltip,
    MatMiniFabButton,
  ],
})
export class StrengthsCarouselComponent implements OnInit {
  visibleStrengths: any[] = [];
  currentTranslateX = 0;
  protected readonly faTrophy = faTrophy;
  protected readonly faCaretRight = faCaretRight;
  protected readonly faCaretLeft = faCaretLeft;
  strengths: { title: string; icon: IconDefinition; description: string }[] = [
    {
      title: 'Strategic<br>(#1 Top Strength)',
      icon: faChess,
      description:
        'A natural problem-solver, Kaitlyn excels at identifying patterns in complexity and charting the best path forward.',
    },
    {
      title: 'Winning others over<br>(#2)',
      icon: faHandshake,
      description:
        'Also known as "WOO," this means Kaitlyn thrives in social environments, effortlessly connecting with new people and fostering meaningful conversations.',
    },
    {
      title: 'Positivity<br>(#3)',
      icon: faLaughBeam,
      description:
        'With an optimistic outlook and a contagious energy, Kaitlyn uplifts those around her.',
    },
    {
      title: 'Developer<br>(#4)',
      icon: faPersonChalkboard,
      description:
        'Kaitlyn is deeply invested in helping others grow and reach their full potential.',
    },
    {
      title: 'Empathy<br>(#5)',
      icon: faPeopleRoof,
      description:
        'Kaitlyn intuitively senses the emotions of those around her, offering genuine understanding and support.',
    },
  ];

  constructor() {}

  ngOnInit() {
    // Initialize visibleStrengths with extra strengths for smooth scrolling
    this.visibleStrengths = [
      ...this.strengths,
      ...this.strengths.slice(0, 6), // Preload enough items for at least two additional sets
    ];
  }

  prevSlide() {
    if (this.currentTranslateX === 0) {
      // Preload at least two additional sets at the beginning for back scroll
      const additionalSet = [...this.strengths.slice(-6)];
      this.visibleStrengths = [...additionalSet, ...this.visibleStrengths];
      this.currentTranslateX += 200; // Adjust to maintain the current slide position
    }
    this.currentTranslateX -= 100;
  }

  nextSlide() {
    const remainingSlots = this.getRemainingSlots();

    if (remainingSlots < 6) {
      // Preload at least 6 more items (2 slides) to fill the gaps
      const additionalSet = [...this.strengths, ...this.strengths];
      this.visibleStrengths = [
        ...this.visibleStrengths,
        ...additionalSet.slice(0, 6),
      ];
    }
    this.currentTranslateX += 100;
  }

  getRemainingSlots(): number {
    // Calculate how many slots are remaining before the visibleStrengths array runs out
    const totalVisibleSlots = Math.floor(this.currentTranslateX / 100) * 3 + 3;
    return this.visibleStrengths.length - totalVisibleSlots;
  }

  openPdf(filePath: string): void {
    const fullPath = `assets/files/${filePath}`;
    window.open(fullPath, '_blank');
  }
}
