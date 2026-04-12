import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';

interface StatItem {
  readonly value: string;
  readonly numericValue: number;
  readonly suffix: string;
  readonly label: string;
}

interface Avatar {
  readonly src: string;
  readonly top: string;
  readonly left: string;
  readonly size: string;
  readonly delay: number;
}

@Component({
  selector: 'app-insights',
  imports: [],
  templateUrl: './insights.html',
  styleUrl: './insights.css',
})
export class Insights {
  private readonly insightsSection = viewChild<ElementRef<HTMLElement>>('insightsSection');

  protected readonly stats: readonly StatItem[] = [
    { value: '110+', numericValue: 110, suffix: '+', label: 'Top Agencies Trust Media LaCarte' },
    { value: '1M', numericValue: 1, suffix: 'M', label: 'Advertisers Reaching the Right Audience' },
    { value: '98.99%', numericValue: 98.99, suffix: '%', label: 'Seamless Media Transactions for Owners' },
  ];

  protected readonly avatars: readonly Avatar[] = [
    { src: '/images/service-one.webp', top: '60%', left: '8%', size: '56px', delay: 0 },
    { src: '/images/service-two.webp', top: '45%', left: '22%', size: '48px', delay: 0.1 },
    { src: '/images/service-three.webp', top: '70%', left: '38%', size: '52px', delay: 0.2 },
    { src: '/images/hero.webp', top: '50%', left: '52%', size: '44px', delay: 0.3 },
    { src: '/images/features.webp', top: '65%', left: '65%', size: '56px', delay: 0.4 },
    { src: '/images/service-one.webp', top: '48%', left: '78%', size: '48px', delay: 0.5 },
    { src: '/images/service-two.webp', top: '72%', left: '88%', size: '40px', delay: 0.6 },
  ];

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const el = this.insightsSection()?.nativeElement;
        if (!el) return;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(el.querySelector('.insights-header'),
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%' },
            },
          );

          const statEls = el.querySelectorAll('.stat-value');
          statEls.forEach((statEl: Element, i: number) => {
            const stat = this.stats[i];
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.numericValue,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: { trigger: statEl, start: 'top 90%' },
              onUpdate: () => {
                const isDecimal = stat.suffix === '%';
                const display = isDecimal ? obj.val.toFixed(2) : Math.floor(obj.val).toString();
                (statEl as HTMLElement).textContent = display + stat.suffix;
              },
            });
          });

          gsap.fromTo(el.querySelectorAll('.avatar-circle'),
            { scale: 0, opacity: 0 },
            {
              scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)',
              scrollTrigger: { trigger: el.querySelector('.avatars-container'), start: 'top 90%' },
            },
          );
        });
      });
    });
  }
}
