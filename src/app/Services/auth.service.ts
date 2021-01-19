import {EventEmitter, Injectable, Output} from '@angular/core';
import {IUser} from "../Interfaces/iuser";
import {UserClass} from "../Classes/user-class";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IJwt} from "../Interfaces/ijwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() userSignIn = new EventEmitter<IUser>();
  @Output() userSignUp = new EventEmitter<IUser>();
  @Output() userLogOut = new EventEmitter();
  private isUserLogIn = false;
  private APIAUTHURL = 'http://127.0.0.1:8000/api/auth/';

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn() {
    this.isUserLogIn = !!localStorage.getItem('token'); //Doppia negazione per trasformalo in booleno.
    return this.isUserLogIn;
  }

  signIn(email: string, password: string) {
    this.http.post(this.APIAUTHURL + 'login', {email: email, password: password})
      .subscribe(
        (payload: IJwt) => {
          localStorage.setItem('token', payload.access_token);
          localStorage.setItem('user', JSON.stringify(payload));
          console.log(payload);
          let user = new UserClass();
          user.name = payload.username;
          user.email = payload.email;
          this.userSignIn.emit(user);
          return true;
        },
        (httpResp: HttpErrorResponse) => {
          console.log(httpResp.message);
        }
      );
  }



  signUp(username: string, email: string, password: string) {
    alert('authService_Signup - ' + email + ' ' + password + ' ' + username);
    const user = new UserClass();
    user.name = username;
    user.email = email;

    this.http.post(this.APIAUTHURL + 'signup',
      {
        name: username,
        email: email,
        password: password
      }
    ).subscribe(
      (payload: IJwt) => {
        localStorage.setItem('token', payload.access_token);
        console.log(payload);
        localStorage.setItem('user', JSON.stringify(payload));
        this.userSignUp.emit(user);
        alert('authService_Signup - ' + email + ' ' + password + ' ' + username);
      },
      (httpResp: HttpErrorResponse) => {
        alert(httpResp.message);
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userLogOut.emit();
    this.isUserLogIn = true;
  }

  getUser(): IUser {
    const data = JSON.parse(localStorage.getItem('user'));
    let user = new UserClass();
    if (data) {
      user.name = data['username'];
      user.email = data['email'];
    }
    return user;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
