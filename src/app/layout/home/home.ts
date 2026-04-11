import { Component } from '@angular/core';

import { Cta } from '../../features/cta/cta';
import { Features } from '../../features/features/features';
import { Hero } from '../../features/hero/hero';
import { Insights } from '../../features/insights/insights';
import { Marquee } from '../../features/marquee/marquee';
import { Services } from '../../features/services/services';
import { Footer } from '../footer/footer';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  imports: [Nav, Footer, Hero, Features, Services, Insights, Marquee, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
