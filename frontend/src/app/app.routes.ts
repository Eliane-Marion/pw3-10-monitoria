import { Routes } from '@angular/router';
import { Monitorias } from './pages/monitorias/monitorias.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitorias',
    pathMatch: 'full'
  },
  {
    path: 'monitorias',
    component: Monitorias
  }
];
