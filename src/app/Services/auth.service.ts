import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogIn = true;
  constructor() { }

  isUserLoggedIn(){
    return this.isUserLogIn;
  }

  signIn(email: string, password: string){

  }

  signUp(username: string, email: string, password: string){

  }

  logout(){
    this.isUserLogIn = false;
  }
}
