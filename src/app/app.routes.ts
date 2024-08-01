import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/landing.routes').then((m) => m.routes)
    },
    {
        path: 'market',
        loadChildren: () => import('./routes/market.routes').then((m) => m.routes)
    }
];
