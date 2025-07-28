import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isLoggedInSubject=new BehaviorSubject<boolean>(false);

private currentUserSubject=new BehaviorSubject<string|null>(null);

isLoggedIn$=this.isLoggedInSubject.asObservable();
currentUser$=this.currentUserSubject.asObservable();

  constructor() {
    const savedUser=localStorage.getItem('user');
    if(savedUser){
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(savedUser);
    }
   }

   login(username:string,password:string): boolean {
    if(username=='user1' && password=='welcome1'){
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(username)
      localStorage.setItem("user",username);
      return true;
    }
    return false;
   }

   logout(){
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
    localStorage.removeItem('user')
   }
}
