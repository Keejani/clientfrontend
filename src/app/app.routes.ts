import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/landingpage/landing.routes').then((m) => m.routes)
    }
];
