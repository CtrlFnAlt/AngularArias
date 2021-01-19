import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../Interfaces/iuser";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser;

  constructor(private auth: AuthService, private router: Router) {
    auth.userSignIn.subscribe((user: IUser) => {
      router.navigate(['/']).then();
    });
  }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    if (!form.valid) {
      return false;
    } else {
      let result = this.auth.signIn(form.value.email, form.value.password);
        this.router.navigate(['users']).then();
    }
  }
}
