import { Routes } from '@angular/router';

export const adminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full', // Obligatorio cuando rediriges una ruta vacía
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'seguimiento',
    loadComponent: () => import('../pages/seguimiento/seguimiento').then((m) => m.Seguimiento),
  },
  {
    path: 'ficha-estudiante',
    loadComponent: () =>
      import('../pages/ficha-estudiante/ficha-estudiante').then((m) => m.FichaEstudiante),
  },
  {
    path: 'actividad-extracurricular',
    loadComponent: () =>
      import('../pages/actividad-extracurricular/actividad-extracurricular').then(
        (m) => m.ActividadExtracurricular,
      ),
  },
  {
    path: 'viaje-taller',
    loadComponent: () => import('../pages/viaje-taller/viaje-taller').then((m) => m.ViajeTaller),
  },
  {
    path: 'asignacion-laboral',
    loadComponent: () => import('../pages/asignacion-laboral/asignacion-laboral').then((m) => m.AsignacionLaboral),
  },
];
