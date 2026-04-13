import { Component, afterNextRender, ElementRef, viewChild } from '@angular/core';

interface FeatureCard {
  readonly iconSrc: string;
  readonly title: string;
  readonly description: string;
  readonly highlighted: boolean;
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  private readonly featuresSection = viewChild<ElementRef<HTMLElement>>('featuresSection');

  protected readonly campaignCard: FeatureCard = {
    iconSrc: '/images/icons/campaign.webp',
    title: 'Campaign Planning',
    description:
      'Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.',
    highlighted: false,
  };

  protected readonly rowTwoCards: readonly FeatureCard[] = [
    {
      iconSrc: '/images/icons/media.webp',
      title: 'Media Buying',
      description:
        'Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.',
      highlighted: false,
    },
    {
      iconSrc: '/images/icons/ad.webp',
      title: 'Ad Distribution',
      description:
        'Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.',
      highlighted: true,
    },
    {
      iconSrc: '/images/icons/performance.webp',
      title: 'Performance Analytics',
      description:
        'Gain actionable insights with real-time performance tracking to maximize your ROI and refine future strategies.',
      highlighted: false,
    },
  ];

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const el = this.featuresSection()?.nativeElement;
        if (!el) return;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          const gridLayout = el.querySelector('.features-grid-layout');
          const cards = el.querySelectorAll('.feature-card');

          // Heading: fade up
          gsap.fromTo(
            el.querySelector('.features-heading'),
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%' },
            },
          );

          // Hero card (col-span-2, left side) → slides in from the left
          gsap.fromTo(cards[0],
            { x: -80, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: gridLayout, start: 'top 85%' },
            },
          );

          // Campaign card (right column, row 1) → slides in from the right
          gsap.fromTo(cards[1],
            { x: 80, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: gridLayout, start: 'top 85%' },
            },
          );

          // Bottom row (3 cards) → staggered slide up with increasing delay
          gsap.fromTo(
            [cards[2], cards[3], cards[4]],
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.65, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: gridLayout, start: 'top 85%' },
            },
          );
        });
      });
    });
  }
}
