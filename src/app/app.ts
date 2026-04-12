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

      if (document.readyState === 'complete') {
        refresh();
      } else {
        window.addEventListener('load', () => refresh(), { once: true });
      }
    });
  }
}
