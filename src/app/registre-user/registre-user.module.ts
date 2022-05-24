import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistreUserPageRoutingModule } from './registre-user-routing.module';

import { RegistreUserPage } from './registre-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreUserPageRoutingModule
  ],
  declarations: [RegistreUserPage]
})
export class RegistreUserPageModule {}
