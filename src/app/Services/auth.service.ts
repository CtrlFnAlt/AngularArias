import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogIn = false;

  constructor() {
  }

  isUserLoggedIn() {
    this.isUserLogIn = !!localStorage.getItem('token'); //Doppia negazione per trasformalo in booleno.
    return this.isUserLogIn;
  }

  signIn(email: string, password: string) {
    localStorage.setItem('token', email);
    return true;
  }

  signUp(username: string, email: string, password: string) {
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLogIn = true;
  }
}
