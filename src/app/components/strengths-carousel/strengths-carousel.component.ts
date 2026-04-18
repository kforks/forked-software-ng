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
  currentIndex = 0;
  isMobile = false;
  isTransitioning = false;

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
        'Kaitlyn is deeply invested in helping others grow and reach their full potential, deriving satisfaction from whole team success.',
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
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.currentIndex = 0;
      });
  }

  get visibleStrengths() {
    const count = this.isMobile ? 1 : 3;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(
        this.strengths[(this.currentIndex + i) % this.strengths.length],
      );
    }
    return result;
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.slide(() => {
      const step = this.isMobile ? 1 : 3;
      this.currentIndex =
        (this.currentIndex - step + this.strengths.length) %
        this.strengths.length;
    });
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.slide(() => {
      const step = this.isMobile ? 1 : 3;
      this.currentIndex = (this.currentIndex + step) % this.strengths.length;
    });
  }

  private slide(updateIndex: () => void) {
    this.isTransitioning = true;
    setTimeout(() => {
      updateIndex();
      setTimeout(() => {
        this.isTransitioning = false;
      }, 50);
    }, 300);
  }

  openPdf(filePath: string): void {
    const fullPath = `assets/files/${filePath}`;
    window.open(fullPath, '_blank');
  }
}
