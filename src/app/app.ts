import { Component, afterNextRender, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('media-alacarte');

  constructor() {
    afterNextRender(() => {
      // Recalculate all ScrollTrigger positions after images/fonts finish loading.
      // This fixes triggers being registered against an incomplete layout on first visit.
      if (document.readyState === 'complete') {
        ScrollTrigger.refresh();
      } else {
        window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      }
    });
  }
}
