import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistreUserPageRoutingModule } from './registre-user-routing.module';

import { RegistreUserPage } from './registre-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistreUserPage]
})
export class RegistreUserPageModule {}
