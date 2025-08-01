import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username = "admin";
  private password = "admin123";

 

  private API_URL="https://fakestoreapi.com/products";
  private LOGIN_URL="http://localhost:3000/login";

  constructor(private http:HttpClient) { }
/*
  login(username: string, password: string) {
    if (this.username === username && this.password === password) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
    */

  isLoggedIn() {
   return !!localStorage.getItem("token");
  }
  getToken(){
    return localStorage.getItem("token");
  }

 login(user:User):Observable<any>{
  return this.http.post(this.LOGIN_URL,user)
 }
    
  
  //API Call

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URL);
  }

  getProtectedData():Observable<any>{
    return this.http.get("http://localhost:3000/protected",{headers:{Authorization:'Bearer '+this.getToken()}})
  }
}
