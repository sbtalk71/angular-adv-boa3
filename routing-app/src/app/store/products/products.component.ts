import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  data!:Product[];
  constructor(private route:ActivatedRoute){
    this.data=route.snapshot.data['productsData'];
  }
}
