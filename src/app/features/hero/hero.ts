import { Component, afterNextRender, ElementRef, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly heroSection = viewChild<ElementRef<HTMLElement>>('heroSection');

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const el = this.heroSection()?.nativeElement;
        if (!el) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(el.querySelector('.hero-tag'),
            { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo(el.querySelector('.hero-subtitle-top'),
            { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
          .fromTo(el.querySelector('.hero-title'),
            { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
          .fromTo(el.querySelector('.hero-subtitle-bottom'),
            { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
          .fromTo(el.querySelector('.hero-visual'),
            { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.9 }, '-=0.4');
      });
    });
  }
}
