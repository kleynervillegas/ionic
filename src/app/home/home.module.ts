import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    // AppRoutingModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [HomePage],

})
export class HomePageModule {}
