import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('../customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('../card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('../form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'city/:id',
    loadChildren: () => import('../city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'publications',
    loadChildren: () => import('../publications/publications.module').then( m => m.PublicationsPageModule)
  },
  {
    path: 'detailsProduct/:id',
    loadChildren: () => import('../details-product/details-product.module').then( m => m.DetailsProductPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
