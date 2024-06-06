import { Routes } from '@angular/router';
import { AppPagesComponent } from './app-pages.component';

export const approutes: Routes = [
  {
    path: '',
    component: AppPagesComponent,
    children: [
      {
        path: 'home',
        data: {
          title: 'Home',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'news',
        data: {
          title: 'News',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./pages/news/news.page').then((m) => m.NewsPage),
      },
      {
        path: 'chats',
        data: {
          title: 'Chats',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./pages/chats/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'settings',
        data: {
          title: 'My Account',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./pages/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'chats/:chatid',
    data: {
      title: 'Chats',
      hasHeader: false,
    },
    loadComponent: () =>
      import('./pages/chat-detail/chat-detail.page').then((m) => m.ChatDetailPage),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
