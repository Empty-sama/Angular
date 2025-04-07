import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'contact',
        loadChildren: () => import('./modules/contact/routes').then((m) => m.contact_routes),
    },
    {
        path: "about",
        loadComponent: () => import('./pages/about/about.page').then((p) => p.AboutPage),
    },
    {
        path: "info",
        loadComponent: () => import('./pages/info/info.component').then((p) => p.InfoComponent),
    },
    {
        path: "**",
        loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent),
    },
];
