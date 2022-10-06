import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { ProductsComponent } from './AdminComponent/products/products.component';
import { DasboardComponent } from './AdminComponent/dasboard/dasboard.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    ProductsComponent,
    DasboardComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
