import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        title: 'Produtos',
        component: ProductsComponent,
    },
    {
        path: 'products/:id',
        component: ProductPageComponent,
    },
    {
        path: 'cart',
        title: 'Meu Carrinho',
        component: CartPageComponent,
    }
];
