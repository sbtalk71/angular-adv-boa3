import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username = "admin";
  private password = "admin123";

  private loggedIn = false;

  private API_URL="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  login(username: string, password: string) {
    if (this.username === username && this.password === password) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  isLoggedIn() {
    return this.loggedIn;
  }

  //API Call

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URL);
  }
}
