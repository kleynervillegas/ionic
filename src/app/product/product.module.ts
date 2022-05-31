import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicInputDirective } from '../directives/ionic-input.directive';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { ProductPageRoutingModule } from './product-routing.module';
import { ProductPage } from './product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductPageRoutingModule,
    SimpleMaskModule
  ],
  declarations: [ProductPage,IonicInputDirective,]
})
export class ProductPageModule {}
