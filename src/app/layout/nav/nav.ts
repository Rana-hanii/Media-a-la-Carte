import { Component, signal, afterNextRender, ElementRef, viewChild } from '@angular/core';
import { gsap } from 'gsap';

interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly sectionId: string;
}

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly activeSection = signal('hero');
  private readonly navBar = viewChild<ElementRef<HTMLElement>>('navBar');

  protected readonly navLinks: readonly NavLink[] = [
    { label: 'The Platform', href: '#hero', sectionId: 'hero' },
    { label: 'Benefits', href: '#services', sectionId: 'services' },
    { label: 'Features', href: '#features', sectionId: 'features' },
    { label: 'About Us', href: '#insights', sectionId: 'insights' },
    { label: 'Request a Demo', href: '#cta', sectionId: 'cta' },
    { label: 'Contact Us', href: '#footer', sectionId: 'footer' },
    
  ];

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => {
        const nav = this.navBar()?.nativeElement;
        if (!nav) return;

        gsap.fromTo(nav,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        );

        window.addEventListener('scroll', () => {
          nav.classList.toggle('nav-scrolled', window.scrollY > 50);
        }, { passive: true });

        const sectionIds = this.navLinks.map(l => l.sectionId);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach(id => {
          const el = document.getElementById(id);
          if (!el) return;

          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                this.activeSection.set(id);
              }
            },
            { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
          );

          observer.observe(el);
          observers.push(observer);
        });
      });
    });
  }

  protected isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
