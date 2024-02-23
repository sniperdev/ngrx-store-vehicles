import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: ()=> import('./pages/counter/counter.component').then((m) => m.CounterComponent)
  },
  {
    path: '**',
    redirectTo: 'counter',
    pathMatch: 'full'
  }
];
