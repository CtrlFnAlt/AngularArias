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

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn()
  }

  newUser() {
    this.onNewUser.emit();
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }


}
