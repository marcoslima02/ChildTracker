// app.routes.ts
import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LocalizacaoPage } from './localizacao/localizacao.page';
import { ProfilePage } from './user/user.page'; // Changed UserPage to ProfilePage

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'tab-menu',
    loadComponent: () => import('./tab-menu/tab-menu.page').then( m => m.TabMenuPage),
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'localizacao',
        component: LocalizacaoPage
      },
      {
        path: 'user',
        component: ProfilePage // Changed UserPage to ProfilePage
      }
      // outras rotas aqui, se necessário
    ]
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.ProfilePage) // Changed UserPage to ProfilePage
  },
  {
    path: 'localizacao',
    loadComponent: () => import('./localizacao/localizacao.page').then( m => m.LocalizacaoPage)
  },
];
