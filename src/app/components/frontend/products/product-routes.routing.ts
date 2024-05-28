import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './product/list-products/list-products.component';

const routes: Routes = [
    {
        path: '',
        component: ListProductsComponent,
    },
];

export const ProductRoutesRoutes = RouterModule.forChild(routes);
