import { Component, afterNextRender, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  private readonly ctaSection = viewChild<ElementRef<HTMLElement>>('ctaSection');

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const el = this.ctaSection()?.nativeElement;
        if (!el) return;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(el.querySelector('.cta-card'),
            { y: 50, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 85%' },
            },
          );
        });
      });
    });
  }
}
