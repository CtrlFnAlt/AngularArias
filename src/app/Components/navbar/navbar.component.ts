import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../../Interfaces/iuser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();

  username: string;
  isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) {
    auth.userSignIn.subscribe((user: IUser) => {
      this.username = user.name;
      this.isUserLoggedIn = true;
    });
    auth.userLogOut.subscribe(() => {
      this.username = '';
      this.isUserLoggedIn = false;
    });
    auth.userSignUp.subscribe((user: IUser) => {
      this.username = user.name;
      this.isUserLoggedIn = true;
    });
  }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn()
  }

  newUser() {
    this.onNewUser.emit();
  }

  logout(e) {
    e.preventDefault();
    this.isUserLoggedIn = false;
    this.auth.logout();
    this.router.navigate(['login']).then();
  }

  singIn(e) {
    e.preventDefault();
    this.isUserLoggedIn = true;
    this.router.navigate(['login']).then();
  }

  singUp(e) {
    e.preventDefault();
    this.isUserLoggedIn = true;
    this.router.navigate(['signup']).then();
  }

}
