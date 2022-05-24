import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistreUserPage } from './registre-user.page';

const routes: Routes = [
  {
    path: '',
    component: RegistreUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistreUserPageRoutingModule {}
