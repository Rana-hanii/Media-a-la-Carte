import { Component, afterNextRender, ElementRef, viewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        gsap.registerPlugin(ScrollTrigger);
        const el = this.featuresSection()?.nativeElement;
        if (!el) return;

        gsap.fromTo(
          el.querySelector('.features-heading'),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          },
        );

        gsap.fromTo(
          el.querySelectorAll('.feature-card'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: el.querySelector('.features-grid-layout'), start: 'top 85%' },
          },
        );
      });
    });
  }
}
