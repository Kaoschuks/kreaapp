import { Routes } from '@angular/router';

export const authroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        data: {
          title: 'Login'
        },
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
