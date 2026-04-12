import { Component, afterNextRender, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
      const refresh = () => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => ScrollTrigger.refresh());
      };

      const scheduleRefresh = () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => refresh(), { timeout: 2000 });
        } else {
          setTimeout(() => refresh(), 200);
        }
      };

      if (document.readyState === 'complete') {
        scheduleRefresh();
      } else {
        window.addEventListener('load', () => scheduleRefresh(), { once: true });
      }
    });
  }
}
