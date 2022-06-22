import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then(m => m.CardPageModule)
      },
      {
        path: 'form',
        loadChildren: () => import('../form/form.module').then(m => m.FormPageModule)
      },
      {
        path: 'city/:id',
        loadChildren: () => import('../city/city.module').then(m => m.CityPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../product/product.module').then(m => m.ProductPageModule)
      },
      {
        path: 'publications',
        loadChildren: () => import('../publications/publications.module').then(m => m.PublicationsPageModule)
      },
      {
        path: 'detailsProduct/:id',
        loadChildren: () => import('../details-product/details-product.module').then(m => m.DetailsProductPageModule)
      },
      {
        path: 'product/edit/:id',
        loadChildren: () => import('../product/product.module').then(m => m.ProductPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
