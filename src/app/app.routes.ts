import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: 'product/:id',
        component: ProductPageComponent,
    },
];
