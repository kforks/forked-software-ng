import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-strengths-carousel',
  templateUrl: './strengths-carousel.component.html',
  styleUrls: ['./strengths-carousel.component.scss'],
  imports: [MatIcon, NgForOf, MatCard],
})
export class StrengthsCarouselComponent implements OnInit {
  strengths = [
    {
      title: 'Strategic',
      icon: 'map',
      description:
        'A natural problem-solver, Kaitlyn excels at identifying patterns in complexity and charting the best path forward.',
    },
    {
      title: 'Woo',
      icon: 'group',
      description:
        'Kaitlyn thrives in social environments, effortlessly connecting with new people and fostering meaningful conversations.',
    },
    {
      title: 'Positivity',
      icon: 'emoji_emotions',
      description:
        'With an optimistic outlook and a contagious energy, Kaitlyn uplifts those around her.',
    },
    {
      title: 'Developer',
      icon: 'trending_up',
      description:
        'Kaitlyn is deeply invested in helping others grow and reach their full potential.',
    },
    {
      title: 'Empathy',
      icon: 'favorite',
      description:
        'Kaitlyn intuitively senses the emotions of those around her, offering genuine understanding and support.',
    },
  ];

  visibleStrengths: any[] = [];
  currentTranslateX = 0;

  ngOnInit() {
    // Initialize visibleStrengths with extra strengths for smooth scrolling
    this.visibleStrengths = [
      ...this.strengths,
      ...this.strengths.slice(0, 6), // Preload enough items for at least two additional slides
    ];
  }

  prevSlide() {
    if (this.currentTranslateX === 0) {
      // Preload at least two additional sets at the beginning if needed
      const additionalSet = [...this.strengths.slice(-6)];
      this.visibleStrengths = [...additionalSet, ...this.visibleStrengths];
      this.currentTranslateX += 200; // Adjust to maintain the current slide position
    }
    this.currentTranslateX -= 100;
  }

  nextSlide() {
    const maxTranslateX = this.getMaxTranslateX();
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

  getMaxTranslateX(): number {
    // Calculate max translate based on visible strengths and slide size
    return Math.ceil(this.visibleStrengths.length / 3) * 100;
  }

  getRemainingSlots(): number {
    // Calculate how many slots are remaining before the visibleStrengths array runs out
    const totalVisibleSlots = Math.floor(this.currentTranslateX / 100) * 3 + 3;
    return this.visibleStrengths.length - totalVisibleSlots;
  }
}
