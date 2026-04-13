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

          // ── Header: blur-in ──────────────────────────────────────────────
          gsap.fromTo(el.querySelector('.insights-header'),
            { filter: 'blur(16px)', opacity: 0, y: 20 },
            {
              filter: 'blur(0px)', opacity: 1, y: 0,
              duration: 1.0, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%' },
            },
          );

          // ── Stats bar: fan in left → right, then counter per column ──────
          const statsGrid = el.querySelector('.grid') as HTMLElement;
          const statValueEls = el.querySelectorAll('.stat-value');
          const statColEls = Array.from(statValueEls).map(v => v.parentElement as HTMLElement);

          gsap.fromTo(statColEls,
            { y: 50, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.6, stagger: 0.18, ease: 'power3.out',
              scrollTrigger: { trigger: statsGrid, start: 'top 85%' },
            },
          );

          // Counter starts after its column slides in (delay matches stagger)
          statColEls.forEach((_, i) => {
            const stat = this.stats[i];
            const statEl = statValueEls[i] as HTMLElement;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.numericValue,
              duration: 2,
              ease: 'power2.out',
              delay: i * 0.18 + 0.35,
              scrollTrigger: { trigger: statsGrid, start: 'top 85%' },
              onUpdate: () => {
                const isDecimal = stat.suffix === '%';
                const display = isDecimal ? obj.val.toFixed(2) : Math.floor(obj.val).toString();
                statEl.textContent = display + stat.suffix;
              },
            });
          });

          // ── Avatars: magnetic scatter → snap to final positions ──────────
          const avatarsContainer = el.querySelector<HTMLElement>('.avatars-container');
          const avatarEls = Array.from(el.querySelectorAll<HTMLElement>('.avatar-circle'));

          if (avatarsContainer && avatarEls.length) {
            const containerW = avatarsContainer.offsetWidth;
            const containerH = avatarsContainer.offsetHeight;

            // Push every avatar to the container center before animating
            avatarEls.forEach(avatar => {
              const finalCX = avatar.offsetLeft + avatar.offsetWidth / 2;
              const finalCY = avatar.offsetTop + avatar.offsetHeight / 2;
              gsap.set(avatar, {
                x: containerW / 2 - finalCX,
                y: containerH / 2 - finalCY,
                opacity: 0,
                scale: 0.4,
              });
            });

            // Scatter outward to final positions with elastic snap
            gsap.to(avatarEls, {
              x: 0, y: 0, opacity: 1, scale: 1,
              duration: 0.9, stagger: 0.08, ease: 'elastic.out(1, 0.65)',
              scrollTrigger: { trigger: avatarsContainer, start: 'top 90%' },
            });
          }
        });
      });
    });
  }
}
