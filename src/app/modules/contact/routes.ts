import { Routes } from '@angular/router';

export const contact_routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/contact/contact.page').then((p) => p.ContactPage),
    },
    {
        path: 'company',
        loadComponent: () => import('./pages/company/company.page').then((p) => p.CompanyPage),
    },
    {
        path: 'sales',
        loadComponent: () => import('./pages/sales/sales.page').then((p) => p.SalesPage),
    },
];
