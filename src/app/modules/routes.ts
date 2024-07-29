import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../shared/components';

export const approutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        data: {
          title: 'Home',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'news',
        data: {
          title: 'News',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./news/news.page').then((m) => m.NewsPage),
      },
      {
        path: 'chats',
        data: {
          title: 'Chats',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./chats/pages/chat-page/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'settings',
        data: {
          title: 'My Account',
          hasHeader: true,
        },
        loadComponent: () =>
          import('./settings/settings.page').then((m) => m.SettingsPage),
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
      import('./chats/pages/chat-detail/chat-detail.page').then((m) => m.ChatDetailPage),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
