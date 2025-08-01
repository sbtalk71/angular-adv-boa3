import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-reseource-demo',
  imports: [],
  templateUrl: './reseource-demo.component.html',
  styleUrl: './reseource-demo.component.css'
})
export class ReseourceDemoComponent {
productId=signal(10);

productResource=resource({
  request: this.productId,
  loader: async({request,abortSignal})=>{
    const response=await fetch(`https://fakestoreapi.com/product/${request}`,{signal:abortSignal});
    if(!response.ok){
      throw new Error("Failed to fetch data")
    }
    console.log(response)
    return response.json();
  }
});
}
