import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full', // Obligatorio cuando rediriges una ruta vacía
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth-layout/auth-layout').then((m) => m.AuthLayout),
    loadChildren: () => import('./features/auth/auth-layout/auth.routes').then((m) => m.authRoutes), // O el nombre que exportes en tu archivo de rutas
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin-layout/admin-layout').then((m) => m.AdminLayout),
    loadChildren: () => import('./features/admin/admin-layout/admin.layout.routes').then((m) => m.adminLayoutRoutes), // O el nombre que exportes en tu archivo de rutas
  },
  {
    path: 'principal',
    loadComponent: () => import('./features/principal/principal').then((m) => m.Principal),
  },

  // Opcional: Manejo de rutas no encontradas (404) redirigiendo al inicio
  {
    path: '**',
    redirectTo: '',
  },
];
