import { Routes } from '@angular/router';

import { Home } from './layout/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Media à la carte',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
