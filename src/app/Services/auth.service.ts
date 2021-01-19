import {Injectable, Output, EventEmitter} from '@angular/core';
import {IUser} from "../Interfaces/iuser";
import {UserClass} from "../Classes/user-class";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogIn = false;
  @Output() userSignIn = new EventEmitter<IUser>();
  @Output() userSignUp = new EventEmitter<IUser>();
  @Output() userLogOut = new EventEmitter();

  constructor() {
  }

  isUserLoggedIn() {
    this.isUserLogIn = !!localStorage.getItem('token'); //Doppia negazione per trasformalo in booleno.
    return this.isUserLogIn;
  }

  signIn(email: string, password: string) {
    localStorage.setItem('token', email);
    let user = new UserClass();
    user.name = 'ArmandoProvaSignIn';
    user.email = email;
    this.userSignIn.emit(user);
    return true;
  }

  signUp(username: string, email: string, password: string) {
    localStorage.setItem('token', email);
    let user = new UserClass();
    user.name = username;
    user.email = email;
    this.userSignUp.emit(user);
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.userLogOut.emit();
    this.isUserLogIn = true;
  }
}
