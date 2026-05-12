import { Routes } from '@angular/router';
import { UserRegistration } from './features/user-registration/user-registration';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/login/tela-login.component').then((m) => m.TelaLoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
    ],
  },
  {
    path: 'CadastroUsuario',
    loadComponent: () =>
      import('./features/user-registration/user-registration').then((m) => m.UserRegistration),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/tela-login.component').then((m) => m.TelaLoginComponent),
  },
  {
    path: 'forms-dashboard',
    loadComponent: () =>
      import('./features/forms-dashboard/forms-dashboard.component').then(
        (m) => m.FormsDashboardComponent,
      ),
  },
];
