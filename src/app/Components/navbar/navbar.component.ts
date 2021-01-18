import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();

  isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) {
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
