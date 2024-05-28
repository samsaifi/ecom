import { Routes } from '@angular/router';
import { HomePageComponent } from './components/frontend/Layouts/home-page/home-page.component';
import { NotfoundComponent } from './components/frontend/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'product',
        loadChildren: () =>
            import('./components/frontend/products/products.module').then(
                (m) => m.ProductsModule
            ),
    },
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
        title: 'Home page',
    },
    {
        path: '**',
        component: NotfoundComponent,
    },
];
