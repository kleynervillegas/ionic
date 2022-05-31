import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IonicModule } from '@ionic/angular';
import { RegistreUserPageRoutingModule } from './registre-user-routing.module';
import { RegistreUserPage } from './registre-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreUserPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule,
  ],
  declarations: [RegistreUserPage]
})
export class RegistreUserPageModule {}
