import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        data: {
          title: 'Home'
        },
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'news',
        data: {
          title: 'News'
        },
        loadComponent: () =>
          import('../news/news.page').then((m) => m.NewsPage),
      },
      {
        path: 'chats',
        data: {
          title: 'Chats'
        },
        loadComponent: () =>
          import('../chats/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'chats/:id',
        data: {
          title: 'detail'
        },
        loadComponent: () => import('../chatdetail/chatdetail.page').then( m => m.ChatdetailPage)
      },
      {
        path: 'settings',
        data: {
          title: 'My Account'
        },
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
