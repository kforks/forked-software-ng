import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCard } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
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
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-strengths-carousel',
  templateUrl: './strengths-carousel.component.html',
  styleUrls: ['./strengths-carousel.component.scss'],
  imports: [FaIconComponent, MatIconButton, MatCard, MatMiniFabButton, NgForOf],
})
export class StrengthsCarouselComponent implements OnInit {
  visibleStrengths: any[] = [];
  currentTranslateX = 0;
  isMobile = false;

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
        'Kaitlyn effortlessly connects with new people and fosters meaningful conversations.',
    },
    {
      title: 'Positivity<br>(#3)',
      icon: faLaughBeam,
      description:
        'With relentless optimism and contagious energy, Kaitlyn uplifts those around her, keeping morale high.',
    },
    {
      title: 'Developer<br>(#4)',
      icon: faPersonChalkboard,
      description:
        'Kaitlyn is deeply invested in helping others grow and reach their full potential, deriving satisfaction whole team success.',
    },
    {
      title: 'Empathy<br>(#5)',
      icon: faPeopleRoof,
      description:
        'Kaitlyn senses the emotions of those around her, offering genuine understanding and support.',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Initialize breakpoint observer for responsive design
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.adjustCarousel();
      });

    this.visibleStrengths = [...this.strengths, ...this.strengths.slice(0, 6)];
  }

  adjustCarousel() {
    // Adjust carousel behavior based on screen size
    if (this.isMobile) {
      this.visibleStrengths = this.strengths.slice(0, 1); // Show only one tile on mobile
    } else {
      this.visibleStrengths = [
        ...this.strengths,
        ...this.strengths.slice(0, 6),
      ];
    }
    this.currentTranslateX = 0; // Reset translation
  }

  prevSlide() {
    if (this.currentTranslateX === 0 && !this.isMobile) {
      const additionalSet = [...this.strengths.slice(-6)];
      this.visibleStrengths = [...additionalSet, ...this.visibleStrengths];
      this.currentTranslateX += this.getSlideWidth();
    }
    this.currentTranslateX -= this.getSlideWidth();
  }

  nextSlide() {
    const remainingSlots = this.getRemainingSlots();
    if (remainingSlots < (this.isMobile ? 1 : 6)) {
      const additionalSet = [...this.strengths, ...this.strengths];
      this.visibleStrengths = [
        ...this.visibleStrengths,
        ...additionalSet.slice(0, this.isMobile ? 1 : 6),
      ];
    }
    this.currentTranslateX += this.getSlideWidth();
  }

  getSlideWidth(): number {
    return this.isMobile ? 100 : 33.33;
  }

  getRemainingSlots(): number {
    const slotsPerSlide = this.isMobile ? 1 : 3;
    const totalVisibleSlots =
      Math.floor(this.currentTranslateX / this.getSlideWidth()) *
        slotsPerSlide +
      slotsPerSlide;
    return this.visibleStrengths.length - totalVisibleSlots;
  }

  openPdf(filePath: string): void {
    const fullPath = `assets/files/${filePath}`;
    window.open(fullPath, '_blank');
  }
}
