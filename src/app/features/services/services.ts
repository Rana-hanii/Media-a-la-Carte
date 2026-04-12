import { Component, afterNextRender, ElementRef, signal, viewChild } from '@angular/core';

interface ServiceCard {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private readonly servicesSection = viewChild<ElementRef<HTMLElement>>('servicesSection');
  protected readonly activeCard = signal(0);

  protected readonly cards: readonly ServiceCard[] = [
    {
      title: 'Advertisers',
      description: 'Run & optimize ads across multiple platforms effortlessly.',
      image: '/images/service-one.webp',
    },
    {
      title: 'Agencies',
      description: 'Manage campaigns at scale with powerful tools and insights.',
      image: '/images/service-two.webp',
    },
    {
      title: 'Media Owners',
      description: 'Monetize your inventory with smarter, data-driven placements.',
      image: '/images/service-three.webp',
    },
  ];

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const el = this.servicesSection()?.nativeElement;
        if (!el) return;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(el.querySelector('.services-header'),
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%' },
            },
          );

          gsap.fromTo(el.querySelectorAll('.service-card'),
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: el.querySelector('.services-grid'), start: 'top 85%' },
            },
          );
        });
      });
    });
  }

  protected setActiveCard(index: number): void {
    this.activeCard.set(index);
  }
}
