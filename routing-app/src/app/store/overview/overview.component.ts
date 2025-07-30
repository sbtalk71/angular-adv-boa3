import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-overview',
  standalone:true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
