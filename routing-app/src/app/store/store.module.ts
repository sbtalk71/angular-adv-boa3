import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  //declarations: [InventoryComponent,ProductsComponent,OverviewComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
