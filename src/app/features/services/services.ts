import { afterNextRender, Component, ElementRef, signal, viewChild } from '@angular/core';

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

  /** On mobile, collapsed cards stack below the active one as tabs.
   *  Returns the visual order position (0 = active, 1 = first tab, 2 = second tab). */
  protected mobileOffset(index: number): number {
    const active = this.activeCard();
    if (index === active) return 0;
    const collapsed = this.cards
      .map((_, i) => i)
      .filter(i => i !== active);
    return collapsed.indexOf(index) + 1;
  }

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

        // Only attach mouseenter on true pointer/hover devices — prevents
        // double-trigger (mouseenter + click) on touch screens causing lag.
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          el.querySelectorAll<HTMLElement>('.service-card').forEach((card, i) => {
            card.addEventListener('mouseenter', () => this.setActiveCard(i), { passive: true });
          });
        }

        const isMobile = !window.matchMedia('(min-width: 768px)').matches;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(el.querySelector('.services-header'),
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%' },
            },
          );

          if (isMobile) {
            // On mobile, cards use CSS class-based transforms for the stacked layout.
            // Only animate opacity so GSAP doesn't set inline transform that conflicts.
            gsap.fromTo(el.querySelectorAll('.service-card'),
              { opacity: 0 },
              {
                opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: el.querySelector('.services-grid'), start: 'top 85%' },
              },
            );
          } else {
            gsap.fromTo(el.querySelectorAll('.service-card'),
              { y: 60, opacity: 0 },
              {
                y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
                scrollTrigger: { trigger: el.querySelector('.services-grid'), start: 'top 85%' },
              },
            );
          }
        });
      });
    });
  }

  protected setActiveCard(index: number): void {
    this.activeCard.set(index);
  }
}
