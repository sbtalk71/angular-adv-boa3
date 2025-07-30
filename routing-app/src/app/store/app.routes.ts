import { Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ProductsComponent } from "./products/products.component";

export const CHILD_ROUTES:Routes=[
    {path:"",component:OverviewComponent},
      {path:"inventory",component:InventoryComponent},
      {path:"products",loadComponent:()=>import('./products/products.component').then(m=>m.ProductsComponent)}
]