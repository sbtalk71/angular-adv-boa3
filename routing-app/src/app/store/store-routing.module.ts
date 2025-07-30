import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { productResolver} from '../products.resolver';

const routes: Routes = [
  {path:"",component:OverviewComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"products",component:ProductsComponent,resolve:{productsData:productResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
  constructor(){
    console.log("Store modules loaded..")
  }
 }
