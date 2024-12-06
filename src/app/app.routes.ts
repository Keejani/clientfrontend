import { Routes } from '@angular/router';
import { PaymentComponent } from './features/payment/payment.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/landing.routes').then((m) => m.routes)
    },
    {
        path: 'market',
        loadChildren: () => import('./routes/market.routes').then((m) => m.routes)
    },
    {
        path : 'payment',
        component: PaymentComponent
    }
];
